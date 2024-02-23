 const friendName = ['Alisa','Kamrul','Rabbi','Rokib','pranto'];
 const friend =friendName.filter(frnd => frnd.length < 4);
 //console.log(friend);



 const values = [96,56,98,36,45,98,25,45,96,58,7];
 const value = values.filter(val => val > 50);
 //console.log(value);



 const numbers = [55,68,75,36,15,54,85,6,38,93,75,100,50];
 const number = numbers.filter(num => num % 2 === 0);
 //console.log("Even number is: ",number);


 const number2 = numbers.filter(num => num % 2 !== 0);   //num % 2 ===1;
 //console.log(number2);



 //without arrow function:
 let num =[222,65,254,5664,32,33,55,96];
 const oddNumber = num.filter(function(nums){
      return nums % 2 === 0;
 });
 console.log(oddNumber);
 

