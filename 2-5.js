/**
 * Created by xiye on 8/26/16.
 */

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
//Overloading with one input parameter
sendMessage("Hello, World");

//Otherwise, we can pass in our own object that handles
//a different way of displaying information

//JavaScript can pass an object {} as parameter, and in the example below, this object has one element which is
//a method

sendMessage("How are you?", {
    handleMsg: function (msg) {
        alert("This is a custom message: " + msg);
    }
});


//Example #2
function makeArray() {
    //The temporary array
    var arr = [];

    //Go through each of the submitted arguments
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }

    //Return the resulting array

    return arr;

}

console.log(makeArray(1,2,3));
