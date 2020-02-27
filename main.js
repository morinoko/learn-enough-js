let Phrase = require("morinoko-palindrome");

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");

  button.addEventListener("click", function() {
    palindromeTester();
  });
});

function palindromeTester() {
  let string = prompt("Please enter a string for palindrome testing:");
  let phrase = new Phrase(string);

  if (phrase.palindrome()) {
    alert(`"${phrase.content}" is a palindrome!`);
  } else {
    alert(`"${phrase.content}" is not a palindrome :(`);
  }
}
