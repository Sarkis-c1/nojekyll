let states = ["kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns the string URL-friendly version.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// Kansas -> Kansas
// North Dakota -> north-dakota


// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
      urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));

}
console.log(functionalUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
    elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(state));

let numbers = [1, 2, 3, 4, 5 ,6,7,8,9,10]

// sum: Imperative version
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum: Functional version
function functionalSum(elements) {
    return elements.reduce((total, n) => { return total += n;});
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
    let length = {};
    elements.forEach(function(element) {
    lengths.element = element.length;
});
return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
    elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths
    });
}

console.log(functionalLengths(states));


