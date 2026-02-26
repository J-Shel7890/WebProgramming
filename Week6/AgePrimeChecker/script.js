// Caluculates age by subtracting the birth year from current year
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// Checks if a number is prime
function isPrime(number) {
	// Logic created with online help
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Main Function 
function checkAgePrime() {
    const input = document.getElementById("birthYear").value;

    const birthYear = Number(input); // Sets birthYear equal to the user input
    const age = calculateAge(birthYear); // Sets the age using the calculateAge() function
    const primeStatus = isPrime(age); // Sets the prime status depending on the isPrime() function

    let message = "Your age is: " + age + "\n";

    if (primeStatus) {
        message += age + " is a Prime number.";
    } else {
        message += age + " is NOT a Prime number.";
    }

    alert(message);
}