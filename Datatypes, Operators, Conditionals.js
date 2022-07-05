/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/
console.log("DATA TYPES");

let integer = 173;
let floatNumber = -28.32;
let arithmeticOperator = integer - floatNumber;
let modulo = 53 % 7;
let string = "thisIs_1_String";
let booleanFalse = 7 < 1;
let booleanTrue = 183 >= 183;
console.log("\n-----WE HAVE NUMBERS:");
console.log(
  "\n-an integer which basically is a whole number that can be positive, negative or 0."
);
console.log("Example of an Integer:", integer);
console.log(
  "\n-a float number is a positive or negative number with a decimal point."
);
console.log("Example of a Float Number:", floatNumber);
console.log(
  "\n-arithmetic operation is kind of a calculator that can Add, Subtract, Multiply, or Divide any Number. Example:"
);
console.log(
  "Example of Arithmetic Operation: 173 -(-28.32)=",
  arithmeticOperator
);
console.log(
  "\n-modulo operation (denoted by %) returns the remainder or signed remainder of a division, after one number is devided by another."
);
console.log("Example of Modulo Operation: 53 % 7=", modulo);
console.log("\n-----WE HAVE STRINGS:");
console.log(
  "\nA string is a sequence of one or more characters that may consist of letters, numbers, or symbols. enclosed between the double quotes."
);
console.log("Example of a String:", `"` + string + `"`);
console.log("\n-----WE HAVE BOOLEANS:");
console.log(
  "\nThe Boolean data type can only return two values. Either TRUE or False"
);
console.log("Two Examples of Boolean Data Types;");
console.log("*7 is lower than 1 is:", booleanFalse);
console.log("*183 is greater, or equal than 183:", booleanTrue);
console.log("\n");
/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/
console.log(
  "\nA variable is something that can vary. It stores the data value that can be changed later on.\n"
);

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
let oneNumber = 12;
let secondNumber = 20;
let addingTwoNumbers = oneNumber + secondNumber;
console.log("\n12 + 20 =", addingTwoNumbers);
console.log("\n");
/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/
let subtraction = 12 - x;
console.log("\n12 - x =", subtraction);
console.log("\n");

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
let nameEquality = name1 === name2;
console.log("\nIs", name1, "equal to", name2, "?", nameEquality);
console.log("\n");

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
