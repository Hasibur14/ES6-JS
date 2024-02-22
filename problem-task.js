// problem-1

const multiply = (a, b, c) => a * b * c;
const result = multiply(2,4,10)
//return result;
//console.log(result);
//--------------------------------------

const sentence1 = ['I am a web developer'];
const sentence2 = ['I love code'];
const sentence3 = ['I love problem solving'];
const sentence = [...sentence1, ...sentence2, ...sentence3];
console.log(sentence);
//--------------------------------------

const val = () => console.log(val(10,));




//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
// problem-2

const friends = (friendsName) => {
    return friendsName.filter(name => name.length % 2 ===0);
}
 const frnd = ['Anik','Salam','Omar','Anis','Ovi'];
const friend = friends(frnd);
console.log(friend);