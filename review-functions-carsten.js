// # Review 5 - Functions

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Write a normal function that takes in two numbers and *returns* the sum of those numbers.
function sumIt(a, b) {
  console.log(a + b);
}
sumIt(35, 35);

const sum = (a, b) => a + b;
console.log(sum(25, 25));

// 2. Write a normal function that takes in a string and *returns* that string capitalized.
function makeItBig(string) {
  console.log(string.toUpperCase());
}
makeItBig("tinylittlecharacters");

// 3. Write a normal function that takes in an array and *returns* the last item in that array.
function lastItemOfArray(array) {
  console.log(array[array.length - 1]);
}
lastItemOfArray(["This", "is", "an", "array"]);

// 4. Write an arrow function that takes in an array and *returns* the first item in that array.
const lastItem = (array2) => {
  console.log(array2[0]);
};
lastItem(["This", "is", "an", "array"]);

// 5. Write an arrow function that takes in a string and *returns* the last three characters of that string.
const lastThreeCharacter = (string2) => {
  console.log(
    string2[string2.length - 1],
    string2[string2.length - 2],
    string2[string2.length - 3]
  );
};
lastThreeCharacter("This is an eee");

// 6. Write an arrow function that takes in an array and *returns* the type of the first item in that array.
const typeOfLastItem = (array3) => {
  console.log(typeof array3[0]);
};
typeOfLastItem([1, "item", true]);

// 7. Write an arrow function that takes in an array and *returns* true, if all items in that array have the same type.
const sameItemType = (array4) => {
  for (let i = 0; i < array4.length - 1; i++) {
    if (typeof array4[i] === typeof array4[i + 1]) {
      return true;
    }
    return false;
  }
};
sameItemType(["item", "item", "item"]);

// 8. Print the `type` of a variable that has a normal function value.
const normalFunction = function () {
  return "That's normal";
};
console.log(typeof normalFunction);

// 9. Print the `type` of a variable that has an arrow function value.
const arrowFunction = () => {
  return "That's an arrow function";
};
console.log(typeof arrowFunction);

// 10. Write and test a function that takes in two parameters (min and max).
// That function should return another function that doesn't take in any parameters,
// but returns a random number between min and max.
// Effectively your "outer" function is a factory that creates customized random number generator functions.

function randomNumberGenerator(min, max) {
  function randomNum() {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return randomNum();
}
console.log(randomNumberGenerator(5, 15));

// 11. In your own words, explain what are side effects and what is a pure function.
// Pure functions accept an input and returns a value withput modifiying it.
// Side effect could be setTimeout()

// 12. In your own words, explain what is the difference between functions and methods.
// Functions are called by name()
// Methods could be an object that nested a function

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// [🐹](https://hamster.dance/hamsterdance/)
