var rs = require("readline-sync");

console.log("Hello, welcome to the node calculator");

function calcStart() {
    var stringFirstNumber;
    var stringSecondNumber;
    var intFirstNumber;
    var intSecondNumber;

    var theCalculation = rs.question("Please enter your calculation: ");

    stringFirstNumber = theCalculation.match(/^\w+/);
    intFirstNumber = parseInt(stringFirstNumber[0]);

    stringSecondNumber = theCalculation.match(/\w+$/);
    intSecondNumber = parseInt(stringSecondNumber[0]);

    console.log(theCalculation);

    if (theCalculation.match(/\x2a/g)) {
        console.log(intFirstNumber * intSecondNumber);
        restartCalc();
    } else if (theCalculation.match(/\x2b/g)) {
        console.log(intFirstNumber + intSecondNumber);
        restartCalc();
    } else if (theCalculation.match(/\x2d/g)) {
        console.log(intFirstNumber - intSecondNumber);
        restartCalc();
    } else if (theCalculation.match(/\x2f/g)) {
        console.log(intFirstNumber / intSecondNumber);
        restartCalc();
    } else {
        console.log("Please enter an acceptable operation. Ex: 1+1 or 3440*45");
        calcStart();
    }
}
function restartCalc() {
    var maybeRestart = rs.keyInYN(
        "Would you like to try another calculation? Y/N"
    );
    if (maybeRestart) {
        calcStart();
    } else {
        console.log("Goodbye");
    }
}
calcStart();
// I could not figure out how to handle the remainders. I'll figure it out though. Cheers.
