/**
 * Created by xiye on 8/29/16.
 */

//Static Method


//A static method attached to the User object
User.cloneUser = function(user){
    return new User(
      //that is a clone of the other user object
        user.getName();
        user.getAge();
    );
}