function isPalidrome(str){
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  return cleaned === cleaned.split('').reverse().join('');
}

const checkPalidrome = ()=>{
const input = document.getElementById("text-input");
const result = document.getElementById("result");

const value = input.value.trim();
  if (value === ''){
    alert('Please input a value');
  }
  else if (isPalidrome(value)) {
    result.textContent = `${value} is a palindrome`;
  }else {
    result.textContent = `${value} is not a palindrome`;
  }
}

const button = document.getElementById("check-btn");

button.addEventListener("click", checkPalidrome);