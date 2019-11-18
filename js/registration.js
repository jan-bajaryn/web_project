// Demonstrating the focus and blur events.
 var helpArray = [ "Enter your name in this input box.",
     "Enter your surname in this input box.",
     "Enter your e-mail address in the format user@domain.",
     "Enter your tel number in this input box in format 777 777 777.",
     "Here choice your month of birthday.", "" ];
 var helpText;

 // initialize helpTextDiv and register event handlers
 function init()
{
     helpText = document.getElementById( "helpText" );

     // register listeners
     registerListeners( document.getElementById( "name" ), 0 );
     registerListeners( document.getElementById( "surname" ), 1 );
     registerListeners( document.getElementById( "email" ), 2 );
     registerListeners( document.getElementById( "tel" ), 3 );
     registerListeners( document.getElementById( "ice-cream-choice" ), 4 );

    var myForm = document.getElementById( "myForm" );
    myForm.addEventListener( "submit",
        function()
        {
            return confirm( "Are you sure you want to submit?" );
        }, // end anonymous function
        false );
    myForm.addEventListener( "reset",
        function()
        {
            return confirm( "Are you sure you want to reset?" );
        }, // end anonymous function
        false );
     } // end function init

// utility function to help register events
 function registerListeners( object, messageNumber ){
     object.addEventListener( "focus",
         function() { helpText.innerHTML = helpArray[ messageNumber ]; },
         false );
     object.addEventListener( "blur",
         function() { helpText.innerHTML = helpArray[ 6 ]; }, false );
 }



window.addEventListener( "load", init, false );