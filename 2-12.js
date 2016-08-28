/**
 * Created by xiye on 8/27/16.
 */

//the variable foo is not declared
function test() {
    foo = "test";
}

//call the function to set the value of foo
test();

//we see that foo is now globally scoped
alert(window.foo == "test");

