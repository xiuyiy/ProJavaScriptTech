/**
 * Created by xiye on 8/29/16.
 */
//Create the constructor for a Person object
function Person(name){
    this.name = name;
}

//Add a new method to the Person object
Person.prototype.getName = function() {
    return this.name;
}

//Create a new User object constructor
function User(name, password) {
    //Notice that this does not support graceful overloading/inheritance
    //e.g. being able to call the super class constructor
    this.name = name;
    this.password = password;
}

//The User object inherits all the Person object's methods
//This is where inheritance happens
User.prototype = new Person();

//We add a method of our own to the User object
User.prototype.getPassword = function(){
    return this.password;
}
