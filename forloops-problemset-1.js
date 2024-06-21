/*
    Create a for loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/


// Printing even numbers:
for (let i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//output:  10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,40.

// Printing odd numbers:
for (let i = 10; i <= 40; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}
//output:  11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39.
