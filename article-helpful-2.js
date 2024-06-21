/* Do…While Statement is new for me 
A do...while statement creates a loop that executes a block of code once, checks if a condition is true, 
and then repeats the loop as long as the condition is true. They are used when you want the code to always execute at least once. 
The loop ends when the condition evaluates to false  */


x = 0
i = 0

do {
    x = x + i;
    console.log(x)
    i++;
} while (i < 5);

// Prints: 0 1 3 6 10
