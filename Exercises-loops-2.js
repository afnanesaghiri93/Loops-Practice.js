//============         Exercise Solutions: Loops      =================//
//============  While Practice =================//
/* Define three variables for the LaunchCode shuttle---one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

1-Construct while loops to do the following:
a-Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive value greater than 5000 but less than 30000.
b-Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry by having the loop continue until the user enters an integer from 1 - 7.

c-Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers. (Hint: The loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel level might not reach 0).

2-After the loops complete, output the result with the phrase, The shuttle gained an altitude of ___ km.

a- If the altitude is 2000 km or higher, add "Orbit achieved!"

b-Otherwise add, "Failed to reach orbit."*/




//1-a- Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive value greater than 5000 but less than 30000.//
const input = require('readline-sync');
let fuelLevel = 0, numAstronauts = 0, altitude = 0;

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
    fuelLevel = input.question("Enter the starting fuel level: ");

}
console.log(fuelLevel);
//1- b-Use a second loop to query the user for the number of astronauts (up to a maximum of 7)//
while (numAstronauts < 1 || numAstronauts > 7) {
    numAstronauts = input.question("Enter the number of astronauts: ");
}
console.log(numAstronaut);
//1-c- se a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers. //
while (fuelLevel - 100 * numAstronauts >= 0) {
    altitude += 50;
    fuelLevel -= 100 * numAstronauts;
}


//2- a-If the altitude is 2000 km or higher, add "Orbit achieved!"//
let output = `The shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
    output += " Orbit achieved!";
}
//2- b- Otherwise add, "Failed to reach orbit."//
/* =====I don't know the answer ====*/
