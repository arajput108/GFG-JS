**********************************Unit=2 JS Fundamentals****************************************

// <<<<<<<<<<<=======Comparison Operators=========>>>>>>>>>>

// console.log(50 > 30);
// console.log(70 < 40);

// console.log(70 <= 70); 
// console.log(70 >= 70);
// in both, js checked the 1st op & then 2nd op and answer accordingly.

//________Equal to (==)_________
//console.log(50 == 50); ____call as Equality check.

//________STRING_______
//for no.s console.log(30==30);
// console.log("apple" > "grapes");
// console.log("glowing" > "glow");
// In string JS will compare each value to the other one and subseqently it will print the result, depedning upon the result whoever will have the highest no. of letters.

//(1)console.log("01" > 1);
//JS convert the string into no. then compare 2>1, where 2 is greater.

//(2)console.log("01" == 1);  (Refer to Note1)
// again, JS convert into strings & check.
//Double operator= It doesn't check the typeof value over here is no. [==, ===, !==, !==, >, <, >=, <=]

/** _______STRICT EQUALITY OPERATOR (===)____ */
//(1)console.log("01" === 1);
// Comparison of No. with string will always false.

//(2)console.log("01" !== 1);

//(3)console.log(null == undefined);
//undefined is a value assigned to a var when no value is assigned.

//(4)console.log(undefined == 45);
//UNdefined here will always be false except NULL. 

//(5)console.log(null === undefined);
//null is nothing but undefined is some value.

//(6)console.log(null > 0);

//(7)console.log(null < 1); 
// False, cause null becomes 0 and then compared to 1.

//(8)console.log(null >= 0);
// True, cause null isn't greater than 0 but yes = to 0.

//(9)console.log(null == 0);
//false, cause null here is null as it is being compared with 0.

//console.log("3" <= "5"); 
//console.log("mango" > "banana"); --> True 
//console.log("2" > "3");--> false
//console.log(undefined == null);-->True 
//console.log(null == undefined);-->True
//console.log(null < 1);--> True

// <<<<<<<<<<<=======Conditonal Statements=========>>>>>>>>>>

1.) if (condition/expression) {
     body/action to be
    }

2.) if(true) {
     console.log("Hello, this is Mike Vajra speaking");
    }

3.) const readlineSync= require("readline-sync");
    const userAge= readlineSync.question("May I know your age? ");

    if(userAge >= 18){
        console.log("Your're eligible for voting!!");
    }
    else { 
        console.log("No, You're not elgible for voting....");
    }

4.) const readlineSync= require("readline-sync");
    const number= Number(readlineSync.question("Enter a number: "));

    const remainder= number % 7;
    if (remainder===0){
        console.log("Fizz")
    }
 

5.) const readlineSync= require("readline-sync");
    const number= Number(readlineSync.question("Enter a number: "));

    const remainderAfterDivisionBySeven= number % 7;
    const remainderAfterDivisionByEight= number % 8;

    if (remainderAfterDivisionBySeven===0 && remainderAfterDivisionByEight===0){
        console.log("By 7");
    } 
    else if(remainderAfterDivisionBySeven===0 || remainderAfterDivisionByEight===0) {
        console.log("By 8");
    }
    else{
           console.log("Number is not divisbile by 7 or 8");
    }

// <<<<<<<<<<<=======Nested Loop=========>>>>>>>>>>

const readlineSync= require("readline-sync");

const number= Number(readlineSync.question("Enter a number:"));
//Number writing here ao that JS takes it as no. rather than string;

const remainder= number % 2;

if (remainder=== 0){
    console.log(`${number} is even`);
    if (number % 4===0){
        console.log(`${number} is divisible by 4.`);
    }
    else{
        console.log(`${number} isn't divisible by 4.`)
    }
}
else{
    console.log(`${number} is odd`);
    if(number % 5===0){
        console.log(`${number} is divisible by 5.`);
    }
    else{
        console.log(`${number} isn't divisible by 5.`);
    }
}
//console.log(number);




// <<<<<<<<<<<=======Conditional Statements Exercise=========>>>>>>>>>>

//A program that reads 3 string & print the smallest string.
const firstString= "apple";
const secondString= "banana";
const thirdString= "kiwi";

const lengthofFirstStr= firstString.length;
const lengthofSecondStr= secondString.length;
const lengthofThirdStr= thirdString.length;

if(lengthofFirstStr < lengthofSecondStr && lengthofFirstStr < lengthofThirdStr){
    console.log(`${firstString} is the smallest string`);
}
else if(lengthofSecondStr < lengthofFirstStr && lengthofSecondStr < lengthofThirdStr){
    console.log(`${secondString} is the smallest string`);
}
else if(lengthofThirdStr > lengthofFirstStr && lengthofThirdStr > lengthofSecondStr){
    console.log(`${thirdString} is the smalllest string`);
}
else{
    console.log("Found 2 or more string with the same length");
}


// <<<<<<<<<<<=======Ternary Operators- 1=========>>>>>>>>>>
It is a short form of writing a if else condition, where we don;t use the syntax, the users in packages, 
if else if and else keyword. But we use 2 operator, which are question mark, and the code.

(totalMarksScored < 40)  ? console.log("Work hard chap!!"): console.log("Bravo, You're passed.")

const totalMarksScored= 70;

//Using if else in normal way
// if (totalMarksScored < 40) {
//     console.log("Work hard chap !!");
// }
// else{
//     console.log("You're passed.")
// }

//Using Ternary Operator
 
//(totalMarksScored < 40)  ? console.log("Work hard chap!!"): console.log("Bravo, You're passed.")

//optimised code:-
const result= totalMarksScored < 40 ? "Work hard chap!!" : "Bravo, You're passed."
console.log(result);

// <<<<<<<<<<<=======Ternary Operators- 2=========>>>>>>>>>>

const totalMarksScored= 100;

Using if else in normal way
 if (totalMarksScored < 40) {
     console.log("Bad");
 }
 else if (totalMarksScored < 60) {
     console.log("Passed.");
 }
 else if (totalMarksScored < 85) {
     console.log("A+");
 }
 else{
     console.log("Genius !!");
 }
 const result= totalMarksScored < 40 ? "Bad" : totalMarksScored < 60 ? "Passed." : totalMarksScored < 85 ? "A+" : "Genius";
 console.log(result);



//Using Ternary Operator
 
(totalMarksScored < 40)  ? console.log("Work hard chap!!"): console.log("Bravo, You're passed.")

optimised code:-
const result= totalMarksScored < 40 ? "Work hard chap!!" : "Bravo, You're passed."
console.log(result);

// <<<<<<<<<<<=======Logical Operator-1=========>>>>>>>>
1.) OR ||
2.) AND &&= All conditions must be true even a single one may hinder.
3.) NOT !
4.) NULLISH COALESCING ??

------AND------

In JavaScript, values that are considered false in a logical AND (&&) operation are often referred to as "falsy" values. Here are the values that are considered false in JavaScript:

false
0 (zero)
'' or "" (empty string)
null
undefined
NaN (Not a Number)
Any other value in JavaScript is considered "truthy" when used in a logical AND (&&) operation.


const phy= 90;
const chem= 95;
const maths= 70;
const bio= 90;

// rather than writing each lines is irrelevant 
//if (phy > 85)
// if (chem > 85)  
// if (maths > 85)  
// if (bio > 85)  
if (phy > 85 && maths > 85 && chem > 85 && bio > 85){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}
//If &&(AND) operator meets the criteria only then it'll print the result. Even the single mismatching of conditon will print false.

------OR------

In JavaScript, when using the logical OR (||) operator, the following values are considered "falsy" and would result in the evaluation of the second operand:

false
null
undefined
0
NaN (Not a Number)
'' (empty string)
Any other value not listed above would be considered "truthy" when evaluated in a boolean context.

const phy= 80;
const chem= 95;
const maths= 70;
const bio= 90;

if (phy > 90 || maths > 90 || chem > 90 || bio > 90){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}
//If || (OR) atleast one codition should meet the criteria doesn;t matter if rest of them are false.


// <<<<<<<<<<<=======Logical Operator-2==========>>>>>>>>

||= firstly,it loooks for truthy values if founds, then good otherwise it'll print the other value assigned to var.

to chech whether the value is true or false just,
//console.log(Boolean(undefined));

*Truthy values= 
*Falsy values= "",-, =, null,undefined, space has character.
1.) const fname= "Aakash";
    const lname= "Rajput";

    const username= fname || lname;
    console.log(`Name:- ${username}`);

2.) let a=5;
    let b= 1;

    console.log(a + (b || 2)); // it says if B has value then assigned otherwise return value as 2

3.) &&= AND will always search for falsy value doesn't matter if truthy is present or not.
    const fname= "Aakash";
    const lname= "Rajput";

    const username= fname && lname;
    console.log(`Name- ${username}`);

//||= it search for truthy value, then only it'll return the falsy value.
//&&= it search for falsy value, then only it'll return the truthy value.
// that's why we only use the || operator for short circuiting.

Practice:-
// find the result for Ored opertaion.
// a.) console.log(3 || 2 || 1)
// b.) console.log("" || 0 || 2)
// c.) console.log("" || 0 || undefined)
// d.) console.log("" || "null" || 2)

// find the output of the ANDed operation
// a.) console.log(3 && 2 && 1)
// b.) console.log("" && 0 && 2)
// c.) console.log("undefined" || "null" || "")


// <<<<<<<<<<<=======Logical Operator- 3=========>>>>>>>>>>

// 1.) OR ||= Atleast one conditon should satisfy.
// 2.) AND &&= All conditions must be true even a single one may hinder.
// 3.) NOT != use to reverse the logic
// 4.) NULLISH COALESCING ??

//boolean of 0 is false and every other is true.
//console.log(3 || 2 || 1); = 3

//console.log("" || 0 || 2); = 2

//console.log("" || 0 || undefined); = undefined

//console.log("" || "null" || 2); = null bcz null is String. 

//console.log(3 && 2 && 1); = 1
//when there are multiple && operators used together, it evaluates them from left to right, stopping at the first falsy value encountered. If no falsy value is found, it returns the last value.

//console.log("" && 0 && 2); = empty
//The first operand "" is a falsy value.
// Because && returns the first falsy value it encounters without evaluating the rest of the expressions (due to short-circuiting), the evaluation stops at "".
// The reason why "" is returned instead of 0 is that "" is the first operand in the series of && operations, and since it's falsy, the evaluation does not proceed beyond this point. The operands after "" are not evaluated because && short-circuits at the first falsy value it finds.

//console.log("undefined" && "null" && ""); = empty


// <<<<<<<<<<<=======Nullish Coalescing=========>>>>>>>>>>

//If the first value is "undefined", "not declared" or "null" only then, it'll move to 2nd value and prints. 

1.) let Fname= "";

    console.log(Fname ?? "Vasuki"); o/p= Aakash
    console.log(undefined ?? "Vasuki"); o/p= Vasuki
    console.log(null ?? "Vasuki"); o/p= Vasuki

    console.log(empty/0/null/undefined || "Vasuki");

    //empty/0/null/undefined as false value but Nullish Coalescing are true value.
    //OR treats empty string & 0 as falsy while Nullish(??) treats it as 

2.) const a= 0;

    //for ||= 1
    //for &&= 0
    console.log(a || 1);

3.) let a= 12;
    let b;

    // ||= it says if B has value then assigned otherwise return value as 0
    console.log(a + (b ?? 0)); // here 0 isn't a falsy value so it'll return 0 and sum 12.  

    //|| op is like either this value or this.
    // ?? is likeif this is undefined then take this one.


// <<<<<<<<<<<=======For Loop=========>>>>>>>>>>
//for(startValue, condition; incrementalValue/DecrementalValue){}

1.) for (let i= 0; i<=1000; i++){
    console.log(i);
    console.log("hello....");
    }
    console.log("Result successfully printed");


2.) const Uname= "Pooja Rajput";   

    const stringLength= Uname.length;
    //console.log(stringLength);

    for (let i=0; i<stringLength; i++){
        console.log(Uname[i])
    }

3.) const Uname= "Pooja Rajput";
    const stringLength= Uname.length;
    //console.log(stringLength);

    for (let i=0; i<5; i++){
        console.log(Uname[i])
    }                           =This will print only the no. assigned limited to i<5


// <<<<<<<<<<<=======Nested for Loop=========>>>>>>>>>>

1.) for (let i= 1; i<=5; i++){
    for (let j=1; j<=12; j++){
        console.log(`The value of i is ${i} & j is ${j}`);
    }
}
=> This will print the whole mutliplication of i and j till the loop ends.
2.) for (let i= 1; i<=5; i++){
    for (let j=1; j<=10; j++){
        let product= i*j;
        console.log(`${i} * ${j}= ${product}`);
    }
    console.log("---------")
}
=> This will gives the output from 1*1....5*10 as per the limits of loop.


// <<<<<<<<<<<=======Exercise for Loop=========>>>>>>>>>>

1.)  const symbol= "* ";
    // console.log(symbol.repeat(1));
    // console.log(symbol.repeat(2));
    // console.log(symbol.repeat(3));
    // console.log(symbol.repeat(4));
    // console.log(symbol.repeat(5));

    or we can use this "for loop"
    for (let i=1; i<=5; i++){
        console.log(symbol.repeat(i));
    }

2.) const symbol= "* ";
    for (let i=5; i>=1; i--){
    console.log(symbol.repeat(i));
    }
= This will print the start invertely.
= By combining these 2 loops we'll have a beautiful art.

3.) const Uname= "Aakash Rajput";
    let count= 0;
    for (let i= 0; i<Uname.length; i++){
        count++;  //count= count+1
        console.log(`Number of char in the string is ${count}`); //or console.log(count);
    }

4.) Given a range of numbers from 1 to 101 find all the even & odds.

    let remainder;
    for (let i= 1; i<=101; i++){
        remainder= i % 2;
        if (remainder=== 0){
            console.log(`${i} is an even number`);
        }
        else{
            console.log(`${i} is an odd number`)
        }
    }

5.) Find the vowels & consonants in the text or inputString.

    const inputString= "Hi, This is Vajra...";
    const vowels= "aeiou";

    for (let i= 0; i<inputString.length; i++){
        if (vowels.includes(inputString[i])){
        console.log(`${inputString[i]} is a vowel`);
        }
        else{
            console.log(`${inputString[i]} isn't a vowel.`)
        }
    }

// to write input strings
// "string.includes("char")

6.) Find the even & odd no in the given phone numbers.

    let inputString1= "9033605975";
    let inputString2= "8860738111";
    const primeNumbers= "13579";

    for (let i= 0; i<inputString1.length; i++){
        if (primeNumbers.includes(inputString1[i])){
        console.log(`${inputString1[i]} is a prime number`);
        }
        else{
            console.log(`${inputString1[i]} isn't a prime number.`)
        }
    }


// <<<<<<<<<<<=======Loops- While loop========>>>>>>>>>>

   In while loop, loop only terminate when condition doesn't match otherwise it will be continued. It enters intol infinite loop.

 1.)  let i= 0;

   while (i < 10){

       console.log(i);
       i= i + 1
   }z
   console.log("execution finished");

2.) let i= 0;
    do{
        console.log(i);
        i++;
    }
    while (i <= 10)
    
//do says exceute this and then check the condition.


// <<<<<<<<<<<=======Error Handling- Try & Search========>>>>>>>>>>

1.) If there is error, this will print
    const Uname= "Aakash";
    try{
        console.log(myName);
    }
    catch(error){
        console.log("error occured");
    }
    console.log(Uname);

2.) console.log(error.var)= Refrence Error
    console.log(error.var)= someFunction is not defined
    console.log(error.stack)= detailed stack description.

3.) const Uname= "Aakash";
    try{
        console.log(myName);
    }
    catch(error){
        console.log("error occured");
    }
    finally{
        console.log("finally executed");
    }
    console.log(Uname);
-------------------------------------------------------------------------------------------------------------------------







































class Solution {
    utility(number) {
        if(number > 100){
            console.log("Big");
        }
        else if(number < 10){
            console.log("Small");
        }
        else ("Number");
    }
}
