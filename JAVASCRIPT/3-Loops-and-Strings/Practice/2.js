// #2: Print the odd and even numbers upto 100 .

// **using for loop**
    
// for (let i = 1; i <= 100; i++) {

//     if (i % 2 != 0) {
//         console.log(i, "odd");
//     }
//     else {
//         console.log(i ,"even");
//     }
// }

//  **using while loop**
    
let i = 1;
while (i <= 100) {
    if (i % 5 === 0 && i % 7 === 0) {
        console.log(i, " ");
    }
    i++
}


