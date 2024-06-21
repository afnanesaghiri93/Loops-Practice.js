/* ==========================================JavaScript conditional statements and loops - Exercises, Practice, Solution===============================*/

/*1. Write a JavaScript program that displays the largest integer among two integers.
2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
8. According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.
9. Write a JavaScript program to find the Armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
10. Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *
11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
12. Write a JavaScript program to sum 3 and 5 multiples under 1000*/

// 1- Declare variables to store input values//
var num1, num2;

// Uncomment the following lines to take input from the user
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");

// Compare the values and print the larger or equality message
// if (parseInt(num1, 10) > parseInt(num2, 10)) {
//     console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
// } else if (parseInt(num2, 10) > parseInt(num1, 10)) {
//     console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
// } else {
//     console.log("The values " + num1 + " and " + num2 + " are equal.");
// }
// output: The values undefined and undefined are equal.//j

//2. Assigning values to variables//
var x = 3;
var y = -7;
var z = 2;

// Checking different conditions based on the signs of x, y, and z
if (x > 0 && y > 0 && z > 0) {
    alert("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
    console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
    console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
    console.log("The sign is +");
} else {
    console.log("The sign is -");
}// output :The values undefined and undefined are equal.The sign is -//

//3-//
var x = 0;
var y = -1;
var z = 4;
if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    }
    else {
        console.log(x + ", " + z + ", " + y);
    }
}
else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    }
    else {
        console.log(y + ", " + z + ", " + x);
    }
}
else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    }
    else {
        console.log(z + ", " + y + ", " + x);
    }
} // output: 4, 0, -1.//

// 4- //
a = -5;
b = -2;
c = -6;
d = 0;
f = -1;
if (a > b && a > c && a > d && a > f) {
    console.log(a);
}
else if (b > a && b > c && b > d && b > f) {
    console.log(b);
}
else if (c > a && c > b && c > d && c > f) {
    console.log(c);
}
else if (d > a && d > c && d > b && d > f) {
    console.log(d);
}
else {
    console.log(f);
}//output : 0.//

//5- //
for (var x = 0; x <= 15; x++) {
    if (x === 0) {
        console.log(x + " is even");
    }
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}//output : 0 is even, 1 is odd, 2 is even, 3 is odd, 4 is even, 5 is odd, 6 is even, 7 is odd, 8 is even, 9 is odd, 10 is even, 11 is odd, 12 is even, 13 is odd, 14 is even, 15 is odd.//

//6- //
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);

if (avg < 60) {
    console.log("Grade : F");
}
else if (avg < 70) {
    console.log("Grade : D");
}
else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}// output: Average grade: 81.6, Grade : B//

// 7- //
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    else {
        console.log(i);
    }
}

// 8- //
function happy_number(num) {
    var m, n;
    var c = [];

    while (num != 1 && c[num] !== true) {
        c[num] = true;
        m = 0;
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }
        num = m;
    }
    return (num == 1);
}

var cnt = 5;
var num = 1;
var f5 = '';
while (cnt-- > 0) {
    while (!happy_number(num))
        num++;
    f5 = f5 + (num + ", ");

    num++;
}
console.log('First 5 happy numbers are : ' + f5);//output : First 5 happy numbers are : 1, 7, 10, 13, 19.//

// 9- //
function three_digit_armstrong_number() {
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k) {
                var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
                var plus = (i * 100 + j * 10 + k);
                if (pow == plus) {
                    console.log(pow);
                }
            }
        }
    }
}
three_digit_armstrong_number();//output : 153, 370, 371, 407.//

//10- //
var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
} /*output : undefined
*
**
***
****
******/

//  11- //
var a = 2154; //First number
var b = 458;  //Second number 
var gcd;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
}
gcd = a;
console.log(gcd);//output : 2. //

// 12 - //
var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);//output : 233168 //





