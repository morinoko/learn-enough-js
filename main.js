let Phrase = require("morinoko-palindrome");

document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector("#palindromeTester");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    palindromeTester(event);
  });
});

function palindromeTester(event) {
  let string = event.target.phrase.value;
  let phrase = new Phrase(string);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome :(`;
  }
}
