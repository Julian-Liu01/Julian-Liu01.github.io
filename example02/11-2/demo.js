window.onload = function() {
    // $ = jQuery, $() = document.querySelectorAll()
    let ps = $('body > p');
    // console.log(ps);

    // # = id
    let firstP = $('body > p#first');
    // console.log(firstP);

    // . = class
    let specialPs = $('body > p.special');
    console.log(specialPs);
};