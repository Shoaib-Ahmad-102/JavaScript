// print 1 to 1000
// for (let myName=1; myName<=1000; myName++){
//     console.log("My name is Shoaib Ahmad");
// }
// console.log("The loop has ended")




// Calculate sum of first 6 numbers 
// let sum = 0;
// for(let num=1; num<=6; num++){
//     sum = sum + num;
// }
// console.log("The sum of first 6 numbers is", sum);
// console.log("Loop has ended")




// Calculate the sum of n numbers 
// let sum = 0;
// let n = 5;
// for (let i=1; i<=n; i++){
//     sum = sum + i;
// }
// console.log("The sum of n numbers is:", sum);




// for of loop ---------> fro loop uses only for strings and variables
//  let name = "ShoaibBhutta";
//  let size = 0;
// for (let i of name){
//     console.log("Characters =", i)
//     size++;
// }
// console.log("Total size of all characters", size)




// for in loop 
// let student = {
//     name:"ShoaibAhmad",
//     age: 24,
//     cgpa: 3.19,
//     isPass: true,
// }
// for(let i in student){
//     console.log("Info", i, "Detail", student[i]  );
// }



// Practice Question 
// Q1. Print all even numbers from 0 to 100
// for (let num =0; num<=100; num++){
//     if (num%2 === 0)
//     console.log("This is evern number =", num);
// }




// Q2. Print all odd numbers from 0 to 100
// for (let num= 0; num<=100; num++){
//     if (num%2 !=0)
//         console.log("This is odd number", num)
// }




// Q3. Create a game where you start with any random game Number. Ask the user to keep guessing the games number until the user enters the correct Value. 

// let gameNumber = 38;

// let userNumber= prompt("Gress the game number")
// while(userNumber != gameNumber){
//     userNumber = prompt("You entered the wrong number, guess again")
// }
// console.log("Congratulations! You entered the right number");