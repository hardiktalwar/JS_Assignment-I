//importing prompt-sync to take input from console
const ps = require("prompt-sync");
const prompt = ps();

//function checks if a number is prime or not
function primeornot() {
    let isPrime = true;
    // take input from the user
    var num = parseInt(prompt("Enter a positive number: "));

// check if number is equal to 1
if (num === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (num > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is a not prime number`);
    }
}
}
//funcion that calls function primeornot 
//and prints on screen when being called 
function print() {
    console.log('Called primeornot function');
    primeornot();   
}
print();