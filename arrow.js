function sum(a, b) {
    const result = a + b;
    return result;
};
const calSum = sum(10, 20);
console.log(calSum);


const x = 20;
const y = 10;
const total = x + y;
console.log(total);

//arrow function
const multiply = (num1, num2) => num1 * num2; 
const multi = multiply(4,4)
console.log(multi);




const value = (xy,xz) => xy + xz;
const add = value(50,30);
console.log("value is ",add);
