/**
 * Created by xiye on 8/27/16.
 */


//Set a global variable, foo, equal to test
var foo = "test";

//Within an if block
if (true) {
   //Set foo equal to 'bew test'
    //NOTE: This is still within the glaobl scope
    var foo = "new test";
}

//As we can see here, as foo is now equal to 'new test'
alert(foo == "new test");

//Create a function that will modify the variable foo
function test() {
    var foo = "old test";
}

//However, when called, 'foo' remains within the scope
//Of the function
test();

//Which is confirmed, as foo is still equal to 'new test'
alert(foo == "new test");

//An interesting aspect of browser-based JavaScript is that all globally scoped variables 
// are actually just properties of the window object



