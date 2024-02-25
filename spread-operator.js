
// --------------------------------
// Spread Array:
// ---------------------------------
const arr1 = [5,12,85,23,52,63];
const arr2 = [18,45,96,495,68,2,55];
const arrSm = [...arr1, ...arr2];
//console.log(arrSm);

const val1 = [15,6,88,44,65,256,45,36];
val1.push(50);
//console.log(val1);

const val2 = [54,556,95,6,4,6,4,645,4,61564];
const val22 =val2.push(10000);
//console.log(val22);

const originalArray = [10,20,30,40,50];
const copyArray = [...originalArray];
//console.log(copyArray);


const number = [25,30,40,20,15];
const number1 = [...number];

number.push(10);
number1.push(100);

// console.log("number: ",number);
// console.log("number1: ",number1);


// --------------------------
// Spread Object:
// --------------------------


const person ={
    name:'Akbar Ali',
    age: 25,
    location : 'Dhaka',
    
}

const person1 = {...person};
person1.email = 'akbar@gmail.com';
console.log(person1);