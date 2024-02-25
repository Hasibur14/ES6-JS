//arrow function
const multiply = (num1, num2) => num1 * num2;
const multi = multiply(4, 4)
console.log(multi);

const value = (xy, xz) => xy + xz;
const add = value(50, 30);
console.log("value is ", add);


// arrow function with map() in age calculation:

const dateOfBirths = [1995, 1992, 1999, 2002, 2000, 1970, 2015, 2005];
const currentAge = dateOfBirths.map(dob => 2024 - dob);
console.log(currentAge);