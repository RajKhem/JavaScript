// for loop

    // for(let i=1; i<=7; i++)
    //  {
    //     console.log("i love nepal");
    //  }

    //  console.log("loop has ended")

 /*
 working of for loop:
 firstly initilazation checking as per stopping condition , 
 if condition is true then enters the block of code
 after executing that blocks work, it goes towards updation condition and again check for stopping condition if true it follows same process of entering block and executing  program, else (if false) it will stop working for that block of program and comes out of that block and executes program outside that block
 */

 
 // calc sum of 1 to 5

    // let sum = 0;
    // let n = 10;
    // // let n = prompt("enter a number n");
    // for(let i = 1; i<=n; i++){
    //     sum = sum + i;
    //     console.log("i=",i)
    //     }
    //     console.log("sum of number from 1 to ",  n ,"is = ",sum);


// infinite loops: never ending 



// while loops
/*  
        initilazation 
        while( stopping condn){
            body statement
            updation
}
 */


// let j=1;
// while(j<=3){
//    console.log("j=",j);
//    j++;
// }


// let j=4;
// while(j<=3){
//    console.log("j=",j);
//    j++;
// }


// do-while 
/*  
        initilazation 
        do {
            body statement
            updation
        } while( stopping condn);
 */


    // let k=4;
    //     do{
    //     console.log("k=",k);
    //     k++;
    //     } while(k<=3);



// for-of loop
/*
used in strings and arrays

for(let val of strVar){
    //statement;
}
*/

let str="khemraj";
let size = 0;
for(let i of str){ //iterator
    console.log("i=",i) 
    size++;
}
console.log("string length=",size);
// for-in loop