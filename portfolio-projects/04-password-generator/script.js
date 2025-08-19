const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");


let syncCharacterAmount = (e) => {
    const value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}

characterAmountRange.addEventListener('input', syncCharacterAmount);
characterAmountNumber.addEventListener('input', syncCharacterAmount);

