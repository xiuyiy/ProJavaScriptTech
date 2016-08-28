/**
 * Created by xiye on 8/27/16.
 */
//Privileged Methods

//Create a new User object constructor
function User(name, age){
    //Attempt to figure out the yar that the user was born
    //Notice that this is a private property in the object
    var year = (new Date()).getFullYear() - age;

    //Create a new Privileged method that has access
    // the year variable, but is still publicly available
    this.getYearBorn = function(){
        return year;
    };
}

//Create a new instance of the user object
var user = new User("Bob", 44);

//Verify that the year returned is correct
alert(user.getYearBorn() == 1962);

// And notice that we're not able to access the private year
// property of the object
alert(user.year == null);
