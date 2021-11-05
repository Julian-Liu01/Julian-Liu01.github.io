// alert('Hello there!');
function printMsg() { //直接建立function (recommend)
    console.log('This is a message in the console');
}

printMsg();

var varFunction = function() { //宣告function儲存為變數
    console.log('This is a function stored is a variable.');
}; //注意這裡有分號

varFunction();

//************************************************************//

alwaysDoFirst();

function alwaysDoFirst() {
    console.log('You can call this function anywhere in the script');
}

//callThisLater(); //var必須先建立才能呼叫var裡面的function (This line cause an error)

var callThisLater = function() {
    console.log('You can call this function after it is built');
};

callThisLater();