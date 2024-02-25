const numbers = [12, 65, 35, 98, 23, 56, 74];
const double = numbers.map(num => num * 2); //num
//console.log(double);

const values = [5, 6, 7, 10, 12];
values.map((val,index,arr) => console.log('Value is: ', val, 'Index is: ',index, arr));


const names = ['don', 'jon', 'boom'];
const naam = names.map(nam => nam.length);
const nams = names.map(nam => nam[1]);
// console.log(naam);
// console.log(nams);

//problem: Convert Fahrenheit temperatures to Celsius


const fahrenheit = [60, 95, 45, 38, 42];
const celsius = fahrenheit.map(cel => (cel - 30) * 5 / 9);
//console.log(celsius);



// problem:Convert an array of strings to uppercase

const frnds = ['fahim', 'karim', 'halim', 'dalim'];
const upperCase = frnds.map(nam => nam.toUpperCase([0]));
//console.log(upperCase);


const words = ['good', 'bad', 'very good'];
const wordss = words.map(word => word.length);
const wordLength = words.map(word => word[0]);
//console.log(wordLength);




