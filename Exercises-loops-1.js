//============         Exercise Solutions: Loops      =================//
//============  for Practice =================//

/* Construct for loops that accomplish the following tasks:

1-Print the numbers 0 - 20, one number per line.

2-Print only the ODD values from 3 - 29, one number per line.

3-Print the EVEN numbers 12 down to -14 in descending order, one number per line.

4-Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3 

*Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], then construct for loops to accomplish the following tasks:

5-Print each element of the array to a new line.

6-Print each character of the string---in reverse order---to a new line.

7-Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:

8-Define an empty evens array to hold the even numbers and an odds array for the odd numbers.

9-In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.

10-Print the arrays to confirm the results. Print evens first. Example: console.log(evens);*/

/* 1-*/
for (let i = 0; i <= 20; i++) {
    console.log(i);
}


/* 2- */
for (let i = 2; i <= 30; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }


}

/* 3-*/
for (let i = 12; i >= -14; i -= 2) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


/* 4- */
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

/* 5- 6- */
let str = 'LaunchCode';
let arr = [1, 5, 'LC101', 'blue', 42];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

/* 7- 8- 9- */
let otherArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = [], odds = [];
for (let i = 0; i < otherArr.length; i++) {

    if (otherArr[i] % 2 == 0) {
        evens.push(otherArr[i]);
    } else {
        odds.push(otherArr[i]);
    }
}
// Print the arrays to confirm the results

console.log(evens);
console.log(odds);




