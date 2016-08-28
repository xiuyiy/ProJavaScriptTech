/**
 * Created by xiye on 8/27/16.
 */
//An element with an ID of main
var obj = document.getElementById('main');

//An array of items to bind to
var items = ["click", "keypress"];

//Iterate through each of the items
for (var i = 0; i < items.length; i++) {
    //Use a self-executed anonymous function tto include scope
    (function(){
        //Remember that value within this scope
        var item = items[i];

        //Bind a function to the element
        obj["on" + item] = function(){
            //item refers to a prent variable that has been successfully
            //scoped within the context of this for loop
            alert("Thanks for your " + item);
        };
    })();

}