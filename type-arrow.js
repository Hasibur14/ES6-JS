//no or default parameter
const noParameter = () => {
    console.log("Hi, JS"); // empty
};

const getPI = () => Math.PI;
console.log(getPI()); //3.1415

// single parameter

const singleParameter = (num) => num ;
console.log(singleParameter(100));


const getAge = (person) => person.age;
const student = {name: 'hablo', age:25 , location:"Dhaka"};
const age = getAge(student);
console.log(age);

//double parameter arrow function

const doubleParameter = (num1,num2) => num1 * num2; // return num1 * num2;
const doubleMultiply = doubleParameter(10,20);
console.log(doubleMultiply);


//Large arrow function

const largeParameter = (x,y,z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const total = sum + multiply;
    return total;
};
console.log(largeParameter(5,10,15));


