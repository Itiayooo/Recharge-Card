let balance = document.getElementById('balance')

let userName = document.getElementById('Name')
let phoneNumber = document.getElementById('phoneNumber')

// let nameEntered = prompt('Please Enter your name');
// userName.innerHTML = nameEntered;

// let numberEntered = prompt('Please enter your phone number');
// phoneNumber.innerHTML = numberEntered

function airtelClick() {
    const priceButton = document.querySelectorAll('.price-box')
    let balanceBox = document.getElementById('balanceBox')
    let nameNumber = document.getElementById('nameNumber')
    let userName = document.getElementById('Name')
    let phoneNumber = document.getElementById('phoneNumber')
    let tableRow = document.getElementById('tableRow')
    let loadCard = document.getElementById('loadCard')
    let generateCard = document.getElementById('generateCard')

    userName.innerHTML = 'Airtel'
    balanceBox.style.backgroundColor = 'red'
    userName.style.color = "red"
    phoneNumber.style.color = "red"
    tableRow.style.backgroundColor = "red"
    tableRow.style.Color = "red"
    priceButton.forEach(button => {
        button.style.backgroundColor = "red";
    });
    loadCard.style.backgroundColor = "red"
    generateCard.style.backgroundColor = "red"

}

function MTNClick() {
    let tableRow = document.getElementById('tableRow')
    const priceButton = document.querySelectorAll('.price-box')
    let userName = document.getElementById('Name')
    let phoneNumber = document.getElementById('phoneNumber')
    let loadCard = document.getElementById('loadCard')
    let generateCard = document.getElementById('generateCard')

    userName.innerHTML = 'MTN'
    balanceBox.style.backgroundColor = 'rgb(255, 196, 3)'
    userName.style.color = "rgb(255, 196, 3)"
    phoneNumber.style.color = "rgb(255, 196, 3)"
    tableRow.style.backgroundColor = "rgb(255, 196, 3)"
    tableRow.style.color = "rgb(255, 196, 3)"
    priceButton.forEach(button => {
        button.style.backgroundColor = "rgb(255, 196, 3)";
    });
    loadCard.style.backgroundColor = "rgb(255, 196, 3)"
    generateCard.style.backgroundColor = "rgb(255, 196, 3)"
    // loadCard.style.color = "black"
    // generateCard.style.color = "black"
}

function gloClick() {
    let tableRow = document.getElementById('tableRow')
    const priceButton = document.querySelectorAll('.price-box')
    let userName = document.getElementById('Name')
    let phoneNumber = document.getElementById('phoneNumber')
    let loadCard = document.getElementById('loadCard')
    let generateCard = document.getElementById('generateCard')

    userName.innerHTML = 'Glo'
    balanceBox.style.backgroundColor = 'green'
    userName.style.color = "green"
    phoneNumber.style.color = "green"
    phoneNumber.style.color = "rgb(255, 196, 3)"
    tableRow.style.backgroundColor = "green"
    tableRow.style.color = "green"
    priceButton.forEach(button => {
        button.style.backgroundColor = "green";
    });
    loadCard.style.backgroundColor = "green"
    generateCard.style.backgroundColor = "green)"
}

function mobileClick() {
    let tableRow = document.getElementById('tableRow')
    const priceButton = document.querySelectorAll('.price-box')
    let userName = document.getElementById('Name')
    let phoneNumber = document.getElementById('phoneNumber')
    let loadCard = document.getElementById('loadCard')
    let generateCard = document.getElementById('generateCard')

    userName.innerHTML = '9Mobile'
    balanceBox.style.backgroundColor = 'darkgreen'
    userName.style.color = "darkgreen"
    phoneNumber.style.color = "darkgreen"
    tableRow.style.backgroundColor = "darkgreen"
    tableRow.style.color = "darkgreen"
    priceButton.forEach(button => {
        button.style.backgroundColor = "green";
    });
    loadCard.style.backgroundColor = "darkgreen"
    generateCard.style.backgroundColor = "darkgreen"
}

function priceBoxOne() {
    document.getElementById('generateCardInput').value = "50.00";
}

function priceBoxTwo() {
    document.getElementById('generateCardInput').value = "100.00";
}

function priceBoxThree() {
    document.getElementById('generateCardInput').value = "200.00";
}

function priceBoxFour() {
    document.getElementById('generateCardInput').value = "500.00";
}

function priceBoxFive() {
    document.getElementById('generateCardInput').value = "1000.00";
}

function priceBoxSix() {
    document.getElementById('generateCardInput').value = "2000.00";
}


let serialNumber = 1; // Add this line near the top of your script

let pinArray = []
let amountArray = []

function generateCard() {
    let displaygenerateCardi = document.getElementById('generatedCard');
    let generateCardInput = document.getElementById('generateCardInput')
    let result = "";

    if (generateCardInput.value == "") {
        displaygenerateCardi.innerHTML = `Input cannot be empty`
        return
    } else {
        for (let i = 0; i < 12; i++) {
            let cardNumber = Math.floor(Math.random() * 9) + 1;
            result += cardNumber;
        }
        displaygenerateCardi.innerHTML = `Your generated ₦${generateCardInput.value} card is ${result}`
    }

    let table = document.getElementById("cardTableBody");
    let newRow = table.insertRow();

    newRow.insertCell(0).innerText = serialNumber++;
    newRow.insertCell(1).innerText = `₦${generateCardInput.value}`;
    newRow.insertCell(2).innerText = result;
    newRow.insertCell(3).innerText = "UNUSED";



    pinArray.push(result);
    console.log(pinArray);

    amountArray.push(generateCardInput.value);
    console.log(amountArray);

}



function loadCard() {
    let loadCardInput = document.getElementById('loadCardInput').value
    let generatedCardPin = document.getElementById('generatedCardPin')
    let balanceNumber = document.getElementById('balanceNumber')



    if (pinArray.includes(loadCardInput)) {
        alert('Card Loaded successfully')
    } else {
        alert('Invalid Card details')
        return
    }

    let i = pinArray.indexOf(loadCardInput);
    balanceNumber.innerHTML = Number(balanceNumber.innerHTML) + Number(amountArray[i])

    // balanceNumber.style.color = "rgb(0, 255, 110)"

    let table = document.getElementById("cardTableBody");
    table.rows[i].cells[3].innerText = "USED";

}






