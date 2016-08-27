/**
 * Created by xiye on 8/27/16.
 */

//We take advantage of the fact that any argument that isn't provided has a value of undefined.
function displayError(msg) {
    if (typeof msg == 'undefined') {
        //If it is, set a default message
        msg = "An error occured";
    }

    //Display the message
    alert(msg);
}

//You can't not do displayError(msg);, because this will throw a compilation error.
// The way we can play with it is to call the method with no parameter
displayError();


