/* Set up a variable to decide which DIV should be on top
   of the other two. The initial value is 2 because by default
	 it is the third DIV (3 - 1 = 2 = the index number representing
	 a specific elements in an array in JavaScript) in all siblings
	 that appears at the top. (see also CSS for my explanation) */
     var slideShowCounter = 2;

     /* This variable will decrease gradually for moving a DIV to the
        bottom of the DIV stack, so the original order in the stack
          is always the same. */
     var zIndexCounter = -1;

     window.onload = function() {
       /* setInterval() runs a function for every specific time interval
            in milliseconds (2000 in this case). This is the basis of the
              slide show. Every time the function is run, we will move the DIV
              at the top to the left, hide it in the background, and move the
              next DIV to the top. */
         setInterval(function() {
             /* Get the current DIV at the top, use animate() to set the
                "left" CSS property to -50px, so the DIV at the top is moved
                  beyond its left edge (i.e., the move-to-the-left effect).
                  This animation is complete in 500 milliseconds, after which
                  a callback function is run to prepare for the next animation. */
             $('div').eq(slideShowCounter).animate({'left': '-50px'}, 500, function(){
               /* In the callback function, move the current DIV to the bottom
                    of the stack by changing the z-index CSS property to -999
                      (the smaller the value is, the lower the element is in a
                      pile. Also, reset the "left" property to 0 to reset its
                      position. So next time it appears in the same original
                      position. */
                  $(this).css({'z-index': zIndexCounter, 'left': 0});
                 /* Check if the slideshow has reach to the first item of the
                    DIV stack. Since the first item is represented by an index
                      number 0, if slideShowCounter minus 1 is below 0, then
                      reset the variable to 2 to start with the last DIV again. */
                 if(slideShowCounter - 1 < 0) {
                      slideShowCounter = 2;
                 }
                 /* If the counter has not reach 0, minus 1. */
                 else {
                      slideShowCounter -= 1;
                 }
                 /* With the new number in the counter, bring the DIV represent
                    by the counter number to the front by setting its z-index
                      to 999. */
                 $('div').eq(slideShowCounter).css({'z-index': 999});
                 /* Subtract 1 from zIndexCounter */
                 zIndexCounter--;
             });
         }, 2000);
     };