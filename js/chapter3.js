// Functions
const addition = (num1, num2) => {
	const result = num1 + num2;
	return result;
};

// Named Function shortcut key = nfn tab.
const square = (x) => {
	return x * x;
};

// console.log shortcut key = clg tab.
console.log(square(5));

const a = 10;
const x = 20;
if (true) {
	const b = 30;
	const y = 40;
	var z = 50;
	console.log(a+b+x+y+z); // 60
}
// b and y are not defined. This means that let and const
// are in fact, local to the block that they are declared in.
console.log(a + x + z);

// `const` means that the identifier can’t be reassigned.
// `let` means that the identifier may be reassigned.
// This variable is used to represent one thing (ie. for loops)
// `var` means a variable may or may not be reassigned,
// and the variable may or may not be used for an entire function,
// or just for the purpose of a block or loop.

const halve = (n) => {
	return n/2;
};
// When multiple bindings have the same name,
// the code can see only the innermost one.
// Thus halve function is seeing its own n,
// not the global n.
const n = 20;
console.log(halve(100));
console.log(n);

// The code inside the ingredient function can see the factor binding
// from the outer function.But its local bindings, such as unit or ingredientAmount,
// are not visible in the outer function.

const hummus = (factor) => {
	const ingredient = (amount, unit, name) => {
		const ingredientAmount = amount * factor;
		if (ingredientAmount > 1) {
			unit += 's';
		}
		console.log(`${ingredientAmount} ${unit} ${name}`);
	};
	console.log(2, 'tablespoon', 'olive oil');
};

// The set of bindings visible inside a block is determined by the place of that block in the program text.
// Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope.
// This approach to binding visibility is called 'lexical scoping'.

// A function value can do all the things that other values can do —you can use it in arbitrary expressions,
// not just call it.It is possible to store a function value in a new binding, pass it as an argument to a function,
// and so on.Similarly, a binding that holds a function is still just a regular binding and can, if not constant,
// be assigned a new value, like so:

let greetHello = () => {
	console.log('Hello Kids!');
};

const greetings = () => {
	const c = 20;
	if (c == 20) {
		greetHello = () => {
			console.log('Hello World!');
		};
	}
};

// Declaration Notation Form
/**
 * Generates a square of x
 * @param {x} x The number.
 * @return {x}
 */
function twice(x) {
	return x * x;
}

// Arrow Function Form
const squareNum = (n) => {
	const result = n * n;
	return result;
};

// JavaScript Call Stack

/**
 * firstThing
 * @return {string} First Thing string.
 */
function firstThing() {
	return 'First Thing';
}

/**
 * secondThing
 * @return {string} First Thing Second Thing string.
 */
function secondThing() {
	return firstThing() + ' Second Thing';
}

secondThing(); // Main Function or Anonymous

// Control Flow:
// firstThing
// secondThing
// anonymous

// Uncaught RangeError: Maximum call stack size exceeded

/**
 * thirdThing
 */
function thirdThing() {
	fourthThing();
}

/**
 * fourthThing
 */
function fourthThing() {
	thirdThing();
}

fourthThing(); // This will result to an error: Maximum call stack size exceeded.
