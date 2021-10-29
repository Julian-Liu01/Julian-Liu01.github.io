var math1 = 2 + 5; // + Addition
var math2 = 3 * 4.5; // * Multiplying
var math3 = 1 - 5; // - Subtracting
var math4 = 20 / 5; // / Dividing
var math5 = 1 - 5 * 20; // Multiply first

var calc = math4 + math5;
// console.log(calc);

var msg = 'The result of calculation is' + calc; // Combine a numeric value with a string a string
// console.log(calc);

var notANumber = '0' + '100'; // These are strings, not numbers!
// console.log(notANumber);

// Mixing math calculations with string combination and strings can only be added with "+"
var test1 = 'Result:' + 5 + 10; //直接變字串合併
var test2 = 'Result:' + 5 * 10; //仍有運算出結果