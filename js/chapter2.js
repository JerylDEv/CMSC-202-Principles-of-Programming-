console.log('Connected');
/*
let theNumber = Number(prompt('Pick a number: '));
if (!Number.isNaN(theNumber)) {
    console.log(`Your number is the square root of ${theNumber * theNumber}`);
} else {
    console.log('Enter a valid number.');
}

// Do Loop
let yourName;

do {
    yourName = prompt('Who are you?');
} while (!yourName);

console.log(yourName);
*/
// While Loop
let number = 0;

while (number < 5) {
    console.log('The current number is ' + number);
    number += 2;
}

// For Loops
for (let a = 0; a < 10; a += 3) {
    console.log(`The number is ${a}`);
}

// Breaking Out of a Loop
for (let b = 3;; b = b + 1) {
    if (b % 2 == 0) {
        console.log(b);
        break;
    }
}

// Updating Bindings Succicntly
// Counter++
// Counter--
// Counter*=2
// Counter/=2

// Switch Statements
/*
switch (prompt('What is the weather today?')) {
    case 'rainy':
        console.log('Remember to bring an umbrella.');
        break;
    case 'sunny':
        console.log('Dress lightly.');
        break;

    default:
        console.log('Unknown weather type.');
        break;
}
*/

// Exercise

// Looping a Triangle
for (let a = 0, b = ''; a < 7; a++) {
    b = b + '#';
    console.log(b);
}

// Looping a Triangle based on .length
// Run the block while hash length is less than or equal to 7
for (let hash = '#'; hash.length <= 7; hash += '#') {
    // Display current hash count;
    console.log(hash);
}

// FizzBuzz
/*
// Run the block of code while the count is less than or equal to 100.
for (let count = 1; count <= 100; count++) {
    // Conditions
    let condition1 = count % 3 == 0;
    let condition2 = count % 5 == 0;
    let condition3 = condition1 && condition2;

    // If statements follows a certain order of
    // precedence that's why I placed condition3 first.
    if (condition3) {
        console.log('FizzBuzz');
    } else if (condition1) {
        console.log('Fizz');
    } else if (condition2) {
        console.log('Buzz');
    } else {
        console.log(count);
    }
}

// Alternate code for FizzBuzz
for (let count = 1; count <= 100; count++) {
    let f = count % 3 == 0,
        b = count % 5 == 0;
    console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : count);
}
*/

// Alternate code for FizzBuzz

for (let n = 0; n < 100; n++) {
    let output = '';
    if (n % 3 == 0) {
        output += 'Fizz';
    }
    if (n % 5 == 0) {
        output += 'Buzz';
    }
    console.log(output || n);
}

// Chess Board Version 1

for (let square = 1; square <= 8; square++) {
    if (square % 2 == 0) {
        console.log('# # # # ');
    } else {
        console.log(' # # # #');
    }
}

// Chess Board Version 2
for (let squareHeight = 1; squareHeight <= 8; squareHeight++) {
    let evenSquareHeight = squareHeight % 2 == 0;
    console.log(evenSquareHeight ? '# # # # ' : ' # # # #');
}

let b = '';

for (let z = 1; z <= 2; z++) {
    if (z % 2 == 0) {
        b = b + ' ';
    } else {
        b = b + '#';
    }
}

console.log(b);

// Chess Board Version 3
// Using the Nested For Loop Concept

let colSize = 8,
    rowSize = 8,
    board = '';

// The Outer For Loop
// This is for the Column. The even number result will
// show result of the Inner For Loop statement (the Row).
// The Odd number result seem to show the reverse of the
// Inner For Loop Statement.
for (let y = 1; y <= colSize; y++) {
    // The Inner For Loop
    // This shows the desired result within a Row.
    for (let x = 1; x <= rowSize; x++) {
        if ((x + y) % 2 == 0) {
            board = board + ' ';
        } else {
            board = board + '#';
        }
    }
    // This separates the odd and even Column > Rows in new line.
    board = board + '\n';
}
console.log(board);