// Block01
{
    var num = 1; // A numeric variable
}
console.log(num); // No problem, you will get 1.

// Block02
{
    let str = 'This is a string'; // A local variable created with 'let'
    console.log(str); // 'let' only available in the specific block
}
console.log(str); // Error: str is undefined