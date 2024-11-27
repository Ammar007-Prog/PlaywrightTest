// let name;
// console.log(name);  // undefined

// // Error! Missing initializer in const declaration
// const x;

// // attempt to initialize constant after declaration
// x = 5;

// console.log(x)

// let count = 5;
// console.log("There are %d items in your basket.", count);
// console.log(`There are ${count} items in your basket.`);
// // Output: There are 5 items in your basket.

//------------ Types of variables
// string enclosed within single quotes
let fruit = 'apple';
console.log(fruit)

// string enclosed within double quotes
let country = "USA";
console.log(country);

// string enclosed within backticks
let result = `fail`;
console.log(result);

let number1 = 3 / 0;
console.log(number1);  // Infinity

let number2 = -3 / 0;
console.log(number2);  // -Infinity

// strings can't be divided by numbers
// let number3 = "abc" / 3; 
// console.log(number3);  // NaN

// BigInt value
let value1 = 900719925124740998n;

// add two big integers
let result1 = value1 + 1n;
console.log(result1);  // "900719925124740999n"

let value2 = 900719925124740998n;


let student = {
    firstName: "John",
    lastName: null,
    class: 10
};

let name = "ram";
console.log(typeof(name));  // string

let number = 4;
console.log(typeof(number));  // number

let valueChecked = true;
console.log(typeof(valueChecked));  // boolean

let a1 = null;
console.log(typeof(a1));  // object

//----------operators

let x = 5;

console.log("x value: ",x)
// addition operator
console.log("Addition: x + 3 = ", x + 3);

// subtraction operator
console.log("Subtraction: x - 3 =", x - 3);

// multiplication operator
console.log("Multiplication: x * 3 =", x * 3);

// division operator
console.log("Division: x / 3 =", x / 3);

// remainder operator
console.log("Remainder: x % 3 =", x % 3);

// increment operator
console.log("Increment: ++x =", ++x);

// decrement operator
console.log("Decrement: --x =", --x);

// exponentiation operator
console.log("Exponentiation: x ** 3 =", x ** 3);

//----
// Operator	Name	Example
// =	Assignment Operator	a = 7;
// +=	Addition Assignment	a += 5;  // a = a + 5
// -=	Subtraction Assignment	a -= 2;  // a = a - 2
// *=	Multiplication Assignment	a *= 3;  // a = a * 3
// /=	Division Assignment	a /= 2;  // a = a / 2
// %=	Remainder Assignment	a %= 2;  // a = a % 2
// **=	Exponentiation Assignment	a **= 2;  // a = a**2

// assignment operator
console.log('----assignment operator----');
let a = 7;
console.log("Assignment: a = 7, a =", a);

// addition assignment operator
a += 5;  // a = a + 5
console.log("Addition Assignment: a += 5, a =", a);

// subtraction assignment operator
a -= 5;  // a = a - 5
console.log("Subtraction Assignment: a -= 5, a =", a);

// multiplication assignment operator
a *= 2;  // a = a * 2
console.log("Multiplication Assignment: a *= 2, a =", a);

// division assignment operator
a /= 2;  // a = a / 2
console.log("Division Assignment: a /= 2, a =", a);

// remainder assignment operator
a %= 2;  // a = a % 2
console.log("Remainder Assignment: a %= 2, a =", a);

// exponentiation assignment operator
a **= 2;  // a = a**2
console.log("Exponentiation Assignment: a **= 7, a =", a);

//-----comparision operators
// Operator	Meaning	Example
// ==	Equal to	3 == 5 gives us false
// !=	Not equal to	3 != 4 gives us true
// >	Greater than	4 > 4 gives us false
// <	Less than	3 < 3 gives us false
// >=	Greater than or equal to	4 >= 4 gives us true
// <=	Less than or equal to	3 <= 3 gives us true
// ===	Strictly equal to	3 === "3" gives us false
// !==	Strictly not equal to	3 !== "3" gives us true
console.log("-----equal to operator--------");
// equal to operator
console.log("Equal to: 2 == 2 is", 2 == 2);

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === '2');

// strictly not equal to operator
console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');

// greater than operator
console.log("Greater than: 3 > 3 is", 3 > 3);

// less than operator
console.log("Less than: 2 > 2 is", 2 > 2);

// greater than or equal to operator
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// less than or equal to operator
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);

// Commonly Used Logical Operators
// Operator	Syntax	Description
// && (Logical AND)	expression1 && expression2	true only if both expression1 and expression2 are true
// || (Logical OR)	expression1 || expression2	true if either expression1 or expression2 is true
// ! (Logical NOT)	!expression	false if expression is true and vice versa

 x = 3;
 console.log("-------Logical Operators--------"+"x alues : ",x )
// logical AND
console.log("(x < 5) && (x > 0)",(x < 5) && (x > 0));  // true
console.log("(x < 5) && (x > 6)",(x < 5) && (x > 6));  // false

// logical OR
console.log("(x > 2) || (x > 5)",(x > 2) || (x > 5));  // true
console.log("(x > 3) || (x < 0)",(x > 3) || (x < 0));  // false

// logical NOT
console.log("!(x == 3)",!(x == 3));  // false
console.log("!(x < 2)",!(x < 2));  // true

// 5. JavaScript Bitwise Operators
// We use bitwise operators to perform binary operations on integers.

// Operator	Description	Example
// &	Bitwise AND	5 & 3  // 1
// |	Bitwise OR	5 | 3  // 7
// ^	Bitwise XOR	5 ^ 3  // 6
// ~	Bitwise NOT	~5  // -6
// <<	Left shift	5 << 1  // 10
// >>	Sign-propagating right shift	-10 >> 1  // -5
// >>>	Zero-fill right shift	-10 >>> 1  // 2147483643

//if...else

// Program to check if the number is positive

 const kNumber = 22 //prompt("Enter a number: ");

// check if number is greater than 0
if (kNumber > 0) {
    // the body of the if statement
    console.log("positive number");
}

console.log("nice number");


// Suppose we need to assign different grades to students based on their scores.

// If a student scores above 90, assign grade A.
// If a student scores above 75, assign grade B.
// If a student scores above 65, assign grade C.
// These conditional tasks can be achieved using the if...else statement.


const studentScore = 67;


if (studentScore>=90){
    console.log('assigned grade A')
}
else if (studentScore>=75 && studentScore<90  ){
    console.log('assigned grade B')
}
else if (studentScore>=65 && studentScore<75){
    console.log('assigned grade C')
}
else {
    console.log('Fail')
}


//else if

// // check for first condition
// if (condition1) {
//     // if body
// }

// // check for second condition
// else if (condition2){
//     // else if body
// }

// // if no condition matches
// else {
//     // else body
// }

let rating = 4;

// rating of 2 or below is bad
// rating of 4 or above is good
// else, the rating is average

if (rating <= 2) {
    console.log("Bad rating");
}
else if (rating >= 4) {
    console.log("Good rating!");
}
else {
    console.log("Average rating");
}

// Output: Good rating!

 grade = 60;
if (grade >= 50) 
    result = 'pass'
else
    result = 'fail'

console.log(result)


/* Using ternary '?:' operator */
grade = 49;
result = (grade >= 50) ? 'pass' : 'fail';
console.log(result)


// switch statement

// switch (expression) {
//     case value1:
//         // Code to execute if expression matches value1
//         break;
//     case value2:
//         // Code to execute if expression matches value2
//         break;
//     // Add more cases as needed
//     default:
//         // Code to execute if no case matches
//         break;
// }

 grade = "C";

// using switch...case
switch (grade) {
    // first condition
    case "A":
        console.log("Excellent!");
        break;
    // second condition
    case "B":
        console.log("Good!");
        break;
    // third condition
    case "C":
        console.log("Average");
        break;
    // fourth condition
    case "D":
        console.log("Bad");
        break;
    default:
        console.log("Fail");
}

// Output: Average

let score = 70;

switch (true) { // Use `true` to match conditions
    case score > 90:
        console.log("Grade: A");
        break;
    case score > 75 && score <= 90:
        console.log("Grade: B");
        break;
    case score > 65 && score <= 75:
        console.log("Grade: C");
        break;
    default:
        console.log("Grade: F");
}

//lOOP

var listk = [12,3,5,6]
let th = listk.length // to get list length
console.log(th)

for(i=0; i<listk.length ; i++) {
     console.log(listk[i])
}

//PRINT NUMBERS 1 TO 5

// for (let i = 1; i < 6; i++) {
//     console.log(i);
// }

// program to display the sum of natural numbers

// let sum = 0;
// const n = 100

// // loop from i = 1 to i = n
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//     sum += i;  // sum = sum + i
// }

// console.log(`sum: ${sum}`);

// Output: sum: 5050

// //print list items
// const fruits = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//nested for loop

// outer loop 
// for (let i = 0; i < 3; i++) {

//     // inner loop
//     for (let j = 0; j < 5; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }

// }


//infinite loop

// for (let i = 0; true; i++) {
//     console.log("This loop will run forever!");
// }

//omitting statement

// initialization outside the loop
let k = 0;

// omit initialization and update statements
for (; k < 3; ) {

    console.log(`k is ${k}`);

    // increment inside the loop body
    k++; 
}


//-----while loop

// initialize variable i
 i = 1;

// loop runs until i is less than 4
while (i < 4) {
    console.log(i);
    i += 1;
}

//-------

// let num = 0, sum = 0;

// // loop as long as num is 0 or positive
// while (num >= 0) {

//     // add all positive numbers
//     sum += num;

//     // take input from the user
//     num = parseInt(prompt("Enter a number: "));
// }

// // last, display sum

//---do...while---

// console.log(`The sum is ${sum}`);
 i = 3;

// do...while loop
do {
    console.log(i);
    i--;
} while (i > 0);


// 2
// let sum = 0, num = 0;

// do {

//     // add all positive numbers
//     sum += num;

//     // take input from the user
//     num = parseInt(prompt("Enter a number: "));

//     // loop terminates if num is negative
// } while (num >= 0);

// // last, display sum
// console.log(`The sum is ${sum}`);


//------break---

// // infinite loop because condition is always true
// while (true) {

//     // get number input from user
//     let num = Number(prompt("Enter a number: "));

//     // break condition
//     if (num == 0) {
//         break;
//     }

//     console.log(num);
// }

// // Output:
// // Enter a number: 5
// // 5
// // Enter a number: 0


//---switch

// // take user input for two numbers
// number1 = Number(prompt("Enter the value of number1: "));
// number2 = Number(prompt("Enter the value of number2: "));

// // take user input to select an operator 
// const operator = prompt("Enter a operator ( either +, -, * or / ): ");

// switch(operator) {

//     case "+":
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case "-":
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case "*":
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case "/":
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log("Invalid operator");
// }



// let nameKj = prompt('EnterName :')

// switch (nameKj) {
//     case 'Ammar':
//         console.log('Ammar Hussain')
//         break
//     case 'Kausar':
//         console.log('Zahra kausar')
//         break
//     default :
//         console.log('Not defined')
//         break
// }


// ----functions ---

function green(){
    console.log("Hellow Ammar")
}

function piValue(){
    console.log("PI value : "+"3.14")
}
green();
piValue();

function greet(name){
    console.log(`Hello ${name}`);
}
greet("Ammar")


function exReturn(){
    console.log("heelo 1")
    return "hello 2"
    console.log("heelo 3")
}

const returnValue = exReturn()
console.log(returnValue)
console.log(returnValue.toLowerCase())
console.log(returnValue.toUpperCase())

// Library Function - 	Description
// console.log()	Prints the string inside the quotation marks.
// Math.sqrt()	Returns the square root of a number.
// Math.pow()	Returns the power of a number.
// toUpperCase()	Returns the string converted to uppercase.
// toLowerCase()	Returns the string converted to lowercase.

function factNum(num){
    let fact =1
    for (let i = 1; i<=num; i++){
         fact *=  i
         console.log(fact)
    }

}
console.log(factNum(5))

//-----for each ----

const numbers2 = [10, 20, 30];

numbers2.forEach(function (x, y, z) {
    console.log(x, y, z); // x - element, y - index , z- list
});

const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((element) => console.log(element));
fruits.forEach((x,y,z) => console.log(z));

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

users.forEach((user) => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
});
/* Promise

A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations in a more readable and maintainable way than traditional callback functions.

Key Concepts of Promises
States of a Promise:

Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation was completed successfully.
Rejected: The operation failed.
Promise Lifecycle:

When created, the Promise is in the pending state.
It transitions to fulfilled when the operation is successful and returns a value.
It transitions to rejected if the operation encounters 
an error and returns a reason for the failure.
Chaining:

Promises can be chained using .then() to handle success and .catch() to handle errors. 
A .finally() can be used to execute code regardless of the result.

syntax :
let promise = new Promise(function(resolve, reject) {
     Perform an asynchronous task
    if ( success condition ) {
        resolve(value); // Resolve the promise with a value
    } else {
        reject(error); // Reject the promise with an error
    }
});

*/

//example :

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched successfully!");
//     }, 2000); // Simulates a 2-second delay
// });

// fetchData
//     .then((data) => {
//         console.log(data); // Logs: "Data fetched successfully!"
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });

//     //2
//     const fetchData2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Failed to fetch data.");
//         }, 2000);
//     });
    
//     fetchData2
//         .then((data) => {
//             console.log(data); // Won't execute as the promise is rejected
//         })
//         .catch((error) => {
//             console.error("Error:", error); // Logs: "Error: Failed to fetch data."
//         });

// //3

// const processNumber = new Promise((resolve, reject) => {
//     resolve(10);
// });

// processNumber
//     .then((num) => {
//         console.log(`Initial value: ${num}`);
//         return num * 2; // Passes 20 to the next `.then()`
//     })
//     .then((num) => {
//         console.log(`Doubled value: ${num}`);
//         return num - 5; // Passes 15 to the next `.then()`
//     })
//     .then((num) => {
//         console.log(`Final value: ${num}`);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });
// //4

// const fetchData1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Network error");
//     }, 2000);
// });

// fetchData1
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     })
//     .finally(() => {
//         console.log("Cleanup tasks complete.");
//     });
/*
Combining Multiple Promises
Promise.all: Waits for all promises to resolve or rejects if any one fails.
Promise.race: Resolves or rejects as soon as one promise completes.
Promise.allSettled: Waits for all promises, regardless of whether they resolve or reject.
*/

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // [10, 20, 30]
    })
    .catch((error) => {
        console.error("Error:", error);
    });

//comment changes






