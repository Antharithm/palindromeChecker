const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", function () {
  const inputValue = textInput.value;

  if (inputValue === "") {
    alert("Please input a value");
  }
});
