/**
 * Created by xiye on 8/26/16.
 */

//Function Overloading and Type-Checking
//Two examples of overloading

//A simple function for sending a message
function sendMessage(msg, obj) {

    //If both a message and an object are provided
    //JavaScript has this arguments attributes to know the inputs
    if (arguments.length == 2) {
        //Send the message to the object
        obj.handleMsg(msg);
    }
    //Otherwise, assume that only a message was provided
    else {
        //So just display  the default error message
        alert(msg);
    }
}

//Call the function with one argument - displaying the message using an alert
sendMessage("Hello, World");

//Otherwise, we can pass in our own object that handles
//a different way of displaying informaiton
sendMessage("How are you?", {
    handleMsg: function (msg) {
        alert("This is a custom messge: " + msg);
    }
});
