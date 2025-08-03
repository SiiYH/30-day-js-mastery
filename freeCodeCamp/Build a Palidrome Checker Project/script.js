const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");
button.addEventListener("click", () => {
  const value = input.value.trim();

  if (value === ''){
    alert('Please input a value');
  }else{
    result.textContent = value + ' is a palindrome';
  }
})
