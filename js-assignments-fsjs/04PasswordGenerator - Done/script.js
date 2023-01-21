const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.textContent).then(
        () => {  window.alert("Successfully copied.");  },
        () => {  window.alert("Copying to clipboard failed.");  }
    )
})

generateEl.addEventListener('click', () => {
    resultEl.textContent = generatePassword(
        lowercaseEl.checked, 
        uppercaseEl.checked, 
        numbersEl.checked, 
        symbolsEl.checked, 
        Number(lengthEl.value)
    );
})

function generatePassword(lower, upper, number, symbol, length) {
    let password = "";
    let allowedFuncs = [];

    if (lower) allowedFuncs.push(getRandomLower);
    if (upper) allowedFuncs.push(getRandomUpper);
    if (number) allowedFuncs.push(getRandomNumber);
    if (symbol) allowedFuncs.push(getRandomSymbol);
    // console.log(allowedFuncs);

    for (i = 0; i <= length; i++) {
        let index = Math.floor(Math.random() * allowedFuncs.length);
        password += allowedFuncs[index]();
    }
    // console.log(password);
    return password;
}

function getRandomLower() {
    const randomIndex = Math.floor(Math.random() * 26);
    return "abcdefghijklmnopqrstuvwxyz"[randomIndex];
}

function getRandomUpper() {
    const randomIndex = Math.floor(Math.random() * 26);
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[randomIndex];
}

function getRandomNumber() {
    const randomIndex = Math.floor(Math.random() * 10);
    return "1234567890"[randomIndex];
}

function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * 32);
    return "~`!@#$%^&*()-_=+{[}]|\\:;\'\",<.>?/"[randomIndex];
}