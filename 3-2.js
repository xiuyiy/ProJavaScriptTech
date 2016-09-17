/**
 * Created by xiye on 8/29/16.
 */
//A simple helper that allows you to bind new functions to the
//prototype of an object

Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};

// A (rather compelex) function that allows you gracefully inherit
// functions from other objects and be able to still call the 'parent'
// object's function
Function.method("inherits", function(parent){
    //Keep track of how many parent-levels deep we are
    var depth = 0;

    //Inherit the parent's methods
    var proto = this.prototype = new parent();

    //Create a new "priveledged" funciotn call "uber", that then called
    //executes any function that has bee nwritten over int he inheritance
    this.method('uber', function uber(name){

        var func; // The function to be execute
        var ret;  // The return value of the function
        var v = parent.prototype; // The parent's prototype

        //If 
    })
})
