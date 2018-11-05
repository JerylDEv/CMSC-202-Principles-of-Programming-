// Functions
const addition = (num1, num2) => {
	const result = num1 + num2;
	return result;
};

// Named Function shortcut key = nfn tab.
const square = (q) => {
	return q * q;
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
 * @param {a} a The number.
 * @return {a}
 */
function twice(a) {
	return a * a;
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

// fourthThing(); // This will result to an error: Maximum call stack size exceeded.

// Optional Arguments
console.log(twice(4, true, 'hello')); // 16

// The upside is that this behavior can be used to allow a function to be called with different numbers of arguments.
/**
 * minus
 * @param {a} a first number
 * @param {b} b second number
 * @return {difference}
 */
function minus(a, b) {
	if (b === undefined) {
		return -a;
	} else {
		return a - b;
	}
}

// If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.

/**
 * power function
 * @param {number} base
 * @param {number} [exponent=2] 2 is the default value for the exponent
 * @return {number} result
 */
function power(base, exponent = 2) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
}

// Closure
// The feature to be able to reference a specific instance of a local binding in an enclosing scope is called closure.

/**
 * wrapValue function
 * @param {number} n
 * @return {number} local number
 */
function wrapValue(n) {
	const local = n;
	return () => local;
}

const wrap1 = wrapValue(1);
const wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

/**
 * multiplier function
 * @param {number} factor
 * @return {number} product
 */
function multiplier(factor) {
	return (number) => number * factor;
}

const multiplication = multiplier(3);

console.log(multiplication(5)); // Returns 15

// In the example, multiplier is called and creates an environment in which its factor parameter is bound to 3.
// The function value it returns, which is stored in multiplication, remembers this environment.
// So when that is called, it multiplies its argument by 3.

// Recursion
// A function that calls itself is called recursive.

/**
 * raise function
 * This is an alternative form of the power function
 * @param {number} base
 * @param {number} exponent
 * @return {number}
 */
function raise(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * raise(base, exponent - 1);
	}
}

const raiseNumber = raise(2, 10);
console.log(raiseNumber);
