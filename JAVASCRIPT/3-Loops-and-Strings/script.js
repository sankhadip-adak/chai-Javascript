
// **** LOOPS ****
    
// 1.***FOR LOOPS***

// print 1 to 5

// for (let i = 1; i <= 10; i++){
//     console.log("i =",i);
// }

// calculate sum of 1 to n

// let sum = 0;
// let n = 10;
// for (let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log("sum =", sum);

// let n1 = 10;
// let sum = (n1*(n1+1))/2
// console.log("sum =", sum);

//  2.***INFINITE LOOPS***
//    =>A Loop that never ends
  
// for (let i = 1; i <= 10; i++){
//      console.log("i =",i);
//  }

// // 3. ***WHILE LOOP***

// let i = 1;
// while (i <= 10) {
//     console.log("apna collage");
//     i++;
// }

// 4. ***DO-WHILE LOOP***

// let i =1;
// do {
//     console.log("i=", i);
//     i++;
// } while (i <= 0);

//    ***assignment***

    // let i = 1;
    // while (i <= 100) {
    //     if (i % 3 === 0 && i % 5 != 0) {
    //         console.log("only divisiable by 3 ")
    //     } else if (i % 5 === 0 && i % 3 != 0) {
    //         console.log("only divisiable by 5 ")
    //     } else if (i % 3 === 0 && i % 5 === 0) {
    //         console.log("jackpot");
    //     } else {
    //         console.log("looser");
// }
// let i = 1;
// while (i <= 100) {
//     if( i % 3 === 0 || i % 5 === 0){
//              console.log(i);
//     }
//     i++
// }

// for ( let i = 1; i <= 100; i++); {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(i);
//     }
// }
        //    ***for of loop ***
               
// let str = "apna collge";
// for (let i of str) {
//          console.log("i =",i);
//      }

//

//   ***for in loop***
// let student = {
//     name: "Rahul Kumar",
//     age: 25,
//     cgpa: 7.5,
//     ispass: true
// };
// for (let key in student) {
//     console.log("key =",key, "value", student[key]);
// }
 
// ***practice question***

// Qs.1 Print all even no from 0 to 100.

// for ( let num = 0; num <= 100; num++){
//     if (num % 2 === 0) {
//         console.log("even number=",num);
//     }
// }
// Q.2 create a game whwre you start with any random number.ask the user to keep guessing the game number until the user enters correct value.

// let gameNum = 25;

// let userName = prompt("Guess the game number :");
// while (userName != gameNum) {
//     userName = prompt("you entered Wrong number.Guess again :");
// }
// console.log("congratulation, you entered the right lesson");

//                ****strings****

// Defination:- string is a sequence of characters used to represent text.

// let str="Sankhadip\nAdak"
// // let str2 = 'hello world'
// // console.log(str[a]);
// console.log(str.length);

// Template Literals in JS:- a way to have embedded expressions in String.

// let specialstring = `this is template literals`
//  console.log( typeof specialstring);

// let obj = {
//     item: "pen",
//     price: 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`
// console.log(output)

// => string interpolation
// to create string by doing substitution of placeholders
// `string text${expression}string text`

// ===> escape character >===

// \n use for next line
// \t use for tab space

// console.log("apna\ncollage");
// console.log("apna\tcollage");

// ****String Methods****
// ==> There are built-in funtion to manipulate in string

// ** str.toUppercase()
// ** str.toLowercase()
// **str.trim() (remove whitespaces).

// let str = "sankhadip adak";
// let newStr = str.toUpperCase()
// console.log(str);
// console.log(newStr);

// let str = "SANKHADIP ADAK"
// str = str.toLowerCase()
// console.log(str);

// let str = "Sankhadip Adak";
// console.log(str.trim());

// ***Few Methods***
// ==> str.slice(start, end ?) *return part of String.
// ==> str1.concat(str2) * join str2 with str1.
// ==> str.replace(searchVal, newVal)
// ==>str.charAt(idx)

// let str = "sankhadip";
// console.log(str.slice(2,5));

// let str1 = "sankha";
// let str2 = "dip"
// console.log(str1.concat(str2));
//  or
 
//     let str1 = "sankha";
//     let str2 = "dip"
//     // let res = str1.concat(str2)
//     // let res = str1 + str2;
// console.log( "I am" ,str1 + str2);

// let str = "sankhadip"
// console.log(str.replaceAll("a","i"));

// let str = "sankhadip adak"
//     console.log(str.charAt(7));

// Q.1 prompt the user to enter their full name.Generate a username for them based on the Input.start username with @,follow by their full name and ending with the full name length.

// let fullName = prompt("enter your full name without spaces")
// let userName = "@"+  fullName + fullName.length;
// console.log(userName);
// let str = "sankhadip"
// console.log(str.length);
// console.table(str)

// let str = "sankhadip"
// console.log(str


// for (let list = 1; list <=1 ; list++){
//     console.log("*");
//     for (let user = 1; user <= 1; user++)
//         console.log("**");
//      for (let user = 1; user <= 1; user++)
//         console.log("***");
//      for (let user = 1; user <= 1; user++)
//         console.log("****");
//      for (let user = 1; user <= 1; user++)
//         console.log("*****");
//     }
    // for (let i = 1; i <= 5; i++) {
    //     for (let j = 1; j <= i; j++){
//     //     console.log(i);
// }
// }  
let num = 5;
for (let i = 1;i<= num; i++) {
    console.log("Masai School");
} 
