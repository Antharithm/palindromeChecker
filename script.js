const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const returnResult = document.getElementById("result");

// Function to check if the string is a palindrome
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[\W_]/g, "").toLowerCase();
  // Compare the cleaned string to its reverse
  return cleaned === cleaned.split("").reverse().join("");
}

// Event listener for the check button
checkBtn.addEventListener("click", function () {
  const inputValue = textInput.value;

  if (inputValue === "") {
    alert("Please input a value");
  } else {
    // Use the isPalindrome function to check the input
    const result = isPalindrome(inputValue)
      ? "is a palindrome"
      : "is not a palindrome";
    returnResult.textContent = `${inputValue} ${result}`;
    // Make sure to remove the "hidden" class to show results
    returnResult.classList.remove("hidden");
  }
});
