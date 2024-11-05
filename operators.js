//Comments in Javascript
/* We will use "//" for commenting 
Multiple lines of code in Javascript */ 
// console.log("Hello World");

//--------arthimetic operators--------
// let a = 3;
// let b = 2;

// console.log("a + b =" , a+b);
// console.log("a - b =" , a-b);
// console.log("a * b =" , a*b);
// console.log("a / b =" , a/b);

//1---------Modulus Operator----------

//Represented by % percentage sign
//it will give us the remainder value during the division
//we can write

// console.log("a % b =" , a % b );


//2---------exponensiation-----------

/*exponensiation operator is used to write the power
of any variable*/
//it is written by ** symbols

//For example

// console.log("a**b =", "and b**c =", a**b, b**a);

//Unary Operators
//There are two types of unary operators
/* 3. increment operator --------> it is denoted by ++
4. Decrement Operator --------> is is denoted by --*/

// a++;
// console.log("a =", a);

// a--;
// console.log("a =", a);

/*increament operator and decreament operator has
furthur 2, 2 types respectively.*/

/* 1. post increment ----- a++
2. pre increment --------- ++a

1. post decrement -------- a--
2. pre decrement --------- --a

for example*/


// consog("--a = ", a--)
// console.log("a = ", ale.lo)

//---------- Assignment Operators-----------

// Assignment ooperators are arthimetic operators and they are
// written in the form given below:

// -=, +=, *=, /=, **=, %=


// if we write a += 1, its means that a = a+1

// for example

// let a = 3;
// let b = 2;

// a -= 1      //a= a -1 which will equal to 2
// console.log("a =", a);

// a += 4       //a = a+4 which will equal to 7
// console.log("a =", a)

// a **= 3        // which will equal to a into the power 3
// console.log("a = ", a);


//-----------Comparison Operators----------
// Comparison Operators are opertors which compares two values

// they are :
// 1. equal to ==             3. equal to & type ===
// 2. not equal to !=         4. Not equal to and type !==

// for example

// let a = 3;
// let b = 3;

// console.log("a = b" , a==b);
// console.log("a !=b", a!=b );

// if we write the value into string then compilar will
// first convert it into number and than compare the value.

// for example:

// let a = 3;
// let b = "4";

// console.log("a = b", a==b)   in this string first convert into numbers and then compilar compare the value 

// let a =4;
// let b = "4";

// console.log("a!==b",a!==b);

// some other comparison operators

// >, >= , <, <=

// For example

// let a = 4;
// let b = 3;

// console.log("a > b", a>b);
// console.log("a >= b", a>=b);
// console.log("a < b", a<b);
// console.log("a <= b", a<=b);



//---------Logical Operators---------

// logical operators are applied on functions.

// There are three types of logicl operators

// Logical ANd denoted by &&
// Logical OR denoted by || 
// logical NOT denoted by !

/*In logical AND Operators returns true if all conditions
are true*/


// For example
// let a = 5;
// let b = 2;

// console.log("a&&b=", a>b && b===2);


/*In logical OR Operator returns true only if one condition
is true*/

// for Example
// let a = 5;
// let b = 2;
// console.log("a || b ", a>b || b>a);

/*NOT Logical Operator returns false against true condition and
returns true against false statement*/

// for example

// let a = 5;
// let b = 2;

// console.log("!(a>b)", !(a>b));