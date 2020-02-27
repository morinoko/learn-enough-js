// Add reverse function to the String protoype 
// to add 'reverse()' to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

console.log('hola'.reverse());

// Add Add a blank method to the String object 
// prototype that returns true if the string is 
// empty or consists solely of whitespace (spaces, tabs, or newlines)
String.prototype.blank = function() {
  return (this.match(/^\s+$/) || this == '') ? true : false;
}

console.log("not blank".blank());
console.log("".blank());
console.log("  \t \n".blank());

// add a last method to the Array object prototype that 
// returns the last element of an array
Array.prototype.last = function() {
  return this.slice(-1)[0];
}

console.log([1,2, 3].last());
console.log(['yo', 'hey', 'hello', 'hallo'].last());