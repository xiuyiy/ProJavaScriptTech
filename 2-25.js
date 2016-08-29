/**
 * Created by xiye on 8/27/16.
 */

//Example of Dynamically Generated Methods That Are Created When a New Object
//Is Instantiated

//Create a new user object that accepts an object of properties

function User(properties) {
    //Iterate through the properties of the project
    //that it's properly scoped (as discussed previously)

    for(var i in properties) {
        (function(){
            //Create a new getter for the property
            //i is the property name and property[i] is the property value
            this["get" + i] = function(){
                return properties[i];
            };

            //Create a new setter for the property
            this["set" + i] = function(val) {
                properties[i] = val;
            };
        })();
    }
}

//Create a new user object instance and pass in an object of
// properties to seed it with
var user = new User({
    name: "Bob",
    age: 44
});


//Just note that the name property dose not exist, as it's private
//within the properties object
alert(user.name == null);

//However, we're able to access its value using the new getname()
//method, that was dynamically generated
alert(user.getname() == "Bob");

//Finally, we can see that it's possible to set and get the age using
// the newly generated functions
user.setage(22);
alert(user.getage() == 22);