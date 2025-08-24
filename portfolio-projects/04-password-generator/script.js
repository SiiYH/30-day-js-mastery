const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const form = document.getElementById("passwordGeneratorForm");
const passwordDisplay = document.getElementById("passwordDisplay");

let arrayFromLowToHigh  = (low, high) => {
    let array = [];
    for (let i = low; i<high; i++){
        array.push(i);
    }
    return array;
}

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 112);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
);

let syncCharacterAmount = (e) => {
    const value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}

let generatePassword = (characterAmount, includeUppercase, includeNumbers, includeSymbols) => {
    let charCode = LOWERCASE_CHAR_CODES;
    if (includeUppercase) charCode = charCode.concat(UPPERCASE_CHAR_CODES);
    if (includeNumbers) charCode = charCode.concat(NUMBER_CHAR_CODES);
    if (includeSymbols) charCode = charCode.concat(SYMBOL_CHAR_CODES);

    const passwordCharacters = [];
    for(let i = 0; i<characterAmount; i++){
        const characterCode = charCode[Math.floor(Math.random() * charCode.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    // console.log(charCode);
    return passwordCharacters.join('');
}



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = characterAmountNumber.checked;

    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
    passwordDisplay.innerText = password;
})
characterAmountRange.addEventListener('input', syncCharacterAmount);
characterAmountNumber.addEventListener('input', syncCharacterAmount);

