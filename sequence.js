function fib(n) { // Returns fibbonacci value 
    n = BigInt(n); // Ensure n is treated as BigInt
    if (n <= 1n) return n; // Base case
    let x = 0n, y = 1n; 
    for (let i = 2n; i <= n; i++) { //Iterates through fibbonacci
        [x, y] = [y, x + y];
    }
    return y; 
}

function fact(n) { //Returns Factorial value
    if (n <= 1) return 1n; // Base case
     let result = 1n;
    for (let i = 2n; i <= BigInt(n); i++) { //Iterates through factorial
        result *= i;
    }
    return result;
}

function formatBigInt(n) { // Used to format big integers into scientific notation
    const strValue = n.toString(); 
    if (strValue.length > 30) { // If the number has more than 30 digits
     return `${strValue.slice(0, 20)}...e+${strValue.length - 1}`; 
    }
    return strValue; // Return the number as a string if it's not too large
}
