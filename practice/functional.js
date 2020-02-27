let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Using Map
// ---------------------------------------------

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];

  elements.forEach(function(element) {
    urls.push(urlify(element));
  });

  return urls;
}

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}

// Returns a URL-friendly version of a string (North Dakota => north-dakota)
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

console.log(imperativeUrls(states));
console.log(functionalUrls(states));

function completeUrls(elements) {
  return elements.map((element) => {
    let slug = urlify(element);

    return `https://example.com/${slug}`;
  });
}

console.log(completeUrls(states));


// Using Filter
// ---------------------------------------------

// single-words: Imperative version
function imperativeSingles(elements) {
  let singles = [];

  elements.forEach( (element) => {
    if (element.split(/\s+/).length == 1) {
      singles.push(element);
    }
  });

  return singles;
}

console.log(imperativeSingles(states));

// single-words: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length == 1);
}

console.log(functionalSingles(states));

// dakotas: Returns the Dakota states
function dakotas(states) {
  return states.filter(state => state.toLowerCase().includes('dakota'));
}

console.log(dakotas(states));

// double-words: returns 2-word elements
function doubles(elements) {
  return elements.filter(element => element.split(/\s+/).length == 2);
}

console.log(doubles(states));


// Using Reduce
// ---------------------------------------------

// Reduce to calculate the sum
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  total = 0;

  elements.forEach((num) => { total += num; });

  return total;
}

console.log(imperativeSum(numbers));

// sum: functional solution
function functionalSum(elements) {
  return elements.reduce((total, num) => { return total += num }, 0);
}

console.log(functionalSum(numbers));

// Reduce to create objects

// State lengths
// Imperative version
function imperativeLengths(elements) {
  let lengths = {};

  elements.forEach(element => {
    lengths[element] = element.length;
  });

  return lengths;
}

console.log(imperativeLengths(states));

// Function version
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}


console.log(functionalLengths(states));

// return product using reduce
function product(numbers) {
  return numbers.reduce((total, number) => { return total *= number });
}
console.log(product(numbers));
