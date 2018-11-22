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

// The function calls itself multiple times with ever smaller exponents to achieve the repeated multiplication.
// But this implementation has one problem: in typical JavaScript implementations,
// it’s about three times slower than the looping version.
// Running through a simple loop is generally cheaper than calling a function multiple times.
// Therefore, always start by writing something that’s correct and easy to understand.
// If you’re worried that it’s too slow—which it usually isn’t since most code simply isn’t executed often enough
// to take any significant amount of time—you can measure afterward and improve it if necessary. (Page 49).

// Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3,
// an infinite set of numbers can be produced. How would you write a function that, given a number,
// tries to find a sequence of such additions and multiplications that produces that number? (Page 50).

/**
 * findSolution function
 * @param {number} target
 * @return {number}
 */
function findSolution(target) {
	/**
	 * find function - recursive
	 * @param {number} current
	 * @param {number} history
	 * @return {string}
	 */
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return find(current + 5, `${history} + 5`) || find(current * 3, `${history} * 3`);
		}
	}
	return find(1, '1');
}

const puzzle1 = findSolution(18);
console.log(puzzle1); // 1 + 5 * 3

const puzzle2 = findSolution(15);
console.log(puzzle2); // null

// The inner function find does the actual recursing.
// It takes two arguments: the current number and a string that records how we reached this number.
// If it finds a solution, it returns a string that shows how to get to the target.
// If no solution can be found starting from this number, it returns null.
// To do this, the function performs one of three actions. If the current number is the target number,
// the current history is a way to reach that target, so it is returned.
// If the current number is greater than the target, there’s no sense in further exploring this branch
// because both adding and multiplying will only make the number bigger, so it returns null.
// Finally, if we’re still below the target number, the function tries both possible paths that start
// from the current number by calling itself twice, once for addition and once for multiplication.
// If the first call returns something that is not null, it is returned.
// Otherwise, the second call is returned, regardless of whether it produces a string or null. (Page 51).

// Growing Functions

// There are 2  or more natural ways for functions to be created in programs
// 1. The first is that you find yourself writing similar code multiple times.
// You’d prefer not to do that. Having more code means more space for mistakes to hide and more material
// to read for people trying to understand the program. So you take the repeated functionality,
// find a good name for it, and put it into a function.
// 2. The second way is that you find you need some functionality that you haven’t written yet and that
// sounds like it deserves its own function. You’ll start by naming the function, and then you’ll write its body.
// You might even start writing code that uses the function before you actually define the function itself.
// How difficult it is to find a good name for a function is a good indication of how clear a concept it is
// that you’re trying to wrap. (Page 51 to 52).

// Functions and their Side Effects

//
