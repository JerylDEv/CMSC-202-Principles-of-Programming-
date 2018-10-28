console.log('Connected');

let inf = Infinity - Infinity;
inf;
inf = 1 - Infinity;
inf;
inf = Infinity - 1;
inf;
const nan = 0 / 0;
nan;

// Unary Operators
// typeof
const num = typeof 7.5;
num;
const str = typeof 'hello';
str;
let bool = typeof true;
bool;
// minus operator can be used a binary or a unary operator
const minus = -(10 - 5);
minus;

// Strings
const x = document.getElementById('backtick');
const msg = 'I use a ' + 'backtick! \n Hello \t World!'; // concatenation works for strings
console.log(msg); // console.log recognizes escapes: \n and \t
x.textContent = msg; // .textContent does not recognize the \n and \t

// Boolean Values
// Comparison
bool = 3 > 2; // > and < are binary operators
bool;
bool = 2 > 3;
bool;
bool = 'apple' > 'Zoolander'; // lowercase is always greater than uppercase
bool;
bool = 'A' > 'Z'; // later letters are always greater than prior laters
bool;
bool = 'a' < 'z';
bool;
bool = NaN == NaN; // NaN is always not equal to itself.
bool;
bool = Infinity == Infinity; // Infinity is always equal to itself
bool;
bool = Infinity == 1 - Infinity;
bool;
// Logical Operators
// and &&, is a binary operator
bool = true && true;
bool;
bool = true && false;
bool;
bool = false && true;
bool;
bool = false && false;
bool;
// or ||, is a binary operator
bool = true || true;
bool;
bool = true || false;
bool;
bool = false || true;
bool;
bool = false || false;
bool;
// not !, is a unary operator
bool = !true;
bool;
bool = !false;
bool;
// Ternary operator, is also know as Conditional oprator
bool = true ? 'yes' : 'no';
bool;
bool = false ? 'yes' : 'no';
bool;
// Empty Values
bool = null == null;
bool;
bool = undefined == undefined;
bool;
bool = undefined == null;
bool;
bool = undefined == null;
bool;
// Automatic Type Conversion
let sample = 8 * null;
sample;
sample = typeof sample;
sample;
sample = '7' - 2;
sample;
sample = typeof sample;
sample;
sample = `15${2}`;
sample;
sample = typeof sample;
sample;
sample = 'Apple' * 2;
sample; // Arithmetic Operators on NaN keep producing NaN
sample = typeof sample;
sample;
sample = false == 0;
sample;
sample = null == 0;
sample;
sample = undefined == 0;
sample;
sample = Infinity == 0;
sample;
sample = NaN == 0;
sample;
sample = 0 == false;
sample;
sample = 0 === false; // === Prevents unexpected type conversions
sample;
// Short-circuiting of Logical Operators
// || or
sample = null || 17;
sample;
sample = null || 'apple';
sample;
sample = undefined || 'green';
sample;
sample = 'apple' || 'lemon';
sample; // || will return the value to its left (original) when that can be converted to true.
sample = 0 || 'banana';
sample; // || will return the value on the right if the left value is false
sample = NaN || 'orange';
sample;
// and &&
sample = null && 17;
sample;
sample = null && 'apple';
sample;
sample = undefined && 'green';
sample;
sample = 'apple' && 'lemon';
sample; // || will return the value to its left (original) when that can be converted to false.
sample = 0 && 'banana';
sample; // || will return the value on the left if the left value is false
sample = NaN && 'orange';
sample;
// The right one is only evaluated when necessary
sample = true || 'yes';
sample;
sample = false || 'no';
sample;
sample = true && 'yes';
sample;
sample = false && 'no';
sample;
