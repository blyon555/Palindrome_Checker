const textInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const resultText = document.getElementById("result");
resultText.style.visibility = "hidden";

function palindrome(input) {
  input = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const inputReverse = [...input].reverse().join('');

  if (input === inputReverse) {
    resultText.innerText = `${textInput.value} is a palindrome`;
  } else {
    resultText.innerText = `${textInput.value} is not a palindrome`;
  }

  resultText.style.visibility = "visible";
}

button.addEventListener("click", () => {
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    palindrome(textInput.value);
  }
});

textInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});