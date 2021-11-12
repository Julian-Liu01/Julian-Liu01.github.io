function anotherMsg() {
    alert('I say the the mouse entered the first div!');
}

window.onload = function() {
    let bodyEM = document.querySelector('body');
    bodyEM.addEventListener('click', function() {
        // Callback function
        // alert('Body is clicked!');
    });

    let firstDiv = document.querySelector('div');
    // firstDiv.addEventListener('mouseenter', anotherMsg); // 不加()才不會直接呼叫

    // let button = document.querySelector('button');
    let changeButton = document.getElementById('changeDiv1');
    changeButton.addEventListener('click', function() {
        firstDiv.style.backgroundColor = 'red';
    });

    let changeResetButton = document.getElementById('changeResetDiv1');
    changeResetButton.addEventListener('click', function(){
        firstDiv.classList.toggle('gold'); //Remove
    });
};