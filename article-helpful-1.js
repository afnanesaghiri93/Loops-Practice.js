
/*   Infinite Loops is helpful for me
A loop that is (theoretically) repeated forever is created when the loop condition is always fulfilled and no break or return statement is reached in the loop body.*/



let i = 0;

while (i < 100) {
    if (i % 3 === 0) {
        continue;
    }

    i = i + 2;
}

// This loop runs forever since the variable i does not change
// anymore after it is divisible by 3 the first time.