// JavaScript program to check if the product of any two numbers equals a third number

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

console.log("Enter integers one by one. Type 'q' or 'Q' to quit.");

function checkProductCondition(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[i] * arr[j] === arr[k]) {
                    console.log(`Condition met: ${arr[i]} x ${arr[j]} = ${arr[k]}`);
                    return;
                }
            }
        }
    }
    console.log("Condition was not met.");
}

function getUserInput() {
    rl.question("Enter a number (or 'q' to quit): ", (input) => {
        if (input.toLowerCase() === 'q') {
            if (numbers.length < 2) {
                console.log("Not enough numbers entered.");
            } else {
                console.log("Numbers entered:", numbers);
                checkProductCondition(numbers);
            }
            rl.close();
        } else {
            const num = parseInt(input, 10);
            if (!isNaN(num)) {
                numbers.push(num);
            } else {
                console.log("Invalid input. Please enter an integer.");
            }
            getUserInput();
        }
    });
}

getUserInput();
