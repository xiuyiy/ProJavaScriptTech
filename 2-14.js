/**
 * Created by xiye on 8/27/16.
 */


//A simple example of curring using closures

//A function that generates a new function for adding numbers
function addGenerator(num) {

    //Return a simple function for adding two numbers
    //with the first number borrowed form the generator
    return function(toAdd) {
        return num + toAdd;
    }
}

//addFive now contains a function that takes one argument,
//ads five to it, and returns the resulting number
var addFive = addGenerator(5);

//We can see her ethat the result of the addFive function is 9
//when passed an argument of 4
alert(addFive(4) ==9); //-->this is so weird, I don't understand

