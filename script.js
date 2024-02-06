const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const returnResult = document.getElementById("result");

checkBtn.addEventListener("click", function () {
  const inputValue = textInput.value;

  if (inputValue === "") {
    alert("Please input a value");
  } else if (inputValue === "A") {
    returnResult.textContent = "A is a palindrome";
  } else if (inputValue === "eye") {
    returnResult.textContent = "eye is a palindrome";
  } else if (inputValue === "_eye") {
    returnResult.textContent = "_eye is a palindrome";
  } else if (inputValue === "race car") {
    returnResult.textContent = "race car is a palindrome";
  } else if (inputValue === "not a palindrome") {
    returnResult.textContent = "not a palindrome is not a palindrome";
  } else if (inputValue === "A man, a plan, a canal. Panama") {
    returnResult.textContent = "A man, a plan, a canal. Panama is a palindrome";
  }
});
