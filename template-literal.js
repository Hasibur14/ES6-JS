
const nam = 'Hasibur Rahman', 
age = 22,
work = 'web developer';

console.log('My name is'+' ' + nam + ' '+ 'and I am'+ ' ' + age + 'years old.'+ ' ' + 'currently am a'+ ' ' + work); 

console.log(`My name is ${nam} and my Age is ${age} .I am ${work}`)




/**
 * ----------------------------------
   calculate age
   -----------------------------------
 */ 
function calculateAge(dateOfBirth){
    console.log(`I am a ${2024 - dateOfBirth} years old`);

};

calculateAge(2002);