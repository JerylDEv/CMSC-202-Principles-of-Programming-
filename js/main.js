console.log('Connected');

// textContent Sample
var hello = document.getElementById('hello');
hello.textContent = 'Hello World!';

// range calculation
let total = 0,
    count = 0;
// while number count is less than or equal to 10 numbers
while (count <= 10) {
    // increment current total with number count
    total += count;
    // add 1 to count
    count += 1;
}
var rangeSum = total;
// console.log(`The sum of 1 to 10 is ${rangeSum}.`);
var x = document.querySelector('#rangeSum');
x.textContent = `The sum of 1 to 10 is ${rangeSum}.`;

function range(firstNum, lastNum) {
    var rangeArray = [];
    // while the first number is less than or equal to the last number
    while (firstNum <= lastNum) {
        // push the number to the array
        rangeArray.push(firstNum);
        // increment 1 to the current number
        firstNum += 1;
    }
    return rangeArray;
}

function sum(numbersArray) {
    var sumTotal = 0;
    // loop through each array item
    for (let i = 0; i < numbersArray.length; i++) {
        // update the sumTotal by incrementing each array item to it
        sumTotal += numbersArray[i];
    }
    return sumTotal;
}

console.log(sum(range(1, 155)));

// console.log(sumOfArrayItems(range(1, 10)));
var y = document.querySelector('#arraySum');
y.textContent = `The sum of 1 to 155 is ${sum(range(1, 155))}.`;