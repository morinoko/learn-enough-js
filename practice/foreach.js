let a = ["ant", "bat", "cat", 42];

// with function keyword
a.forEach(function (element) {
  console.log(element);
});

// with arrow function
a.forEach(element => console.log(element));

let soliloquy = "To be, or not to be, that is the question:";

Array.from(soliloquy).forEach(function (char) {
  console.log(char);
});