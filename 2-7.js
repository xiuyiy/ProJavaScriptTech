/**
 * Created by xiye on 8/27/16.
 */

//Check to see if our number s actually a String
if (typeof num == "string") {
    //If it is, then parse a number out of it
    num = parseInt(num);

    //Check to see if our array is actually a string
    if ( typeof arr == "string") {
        //If that's the case, make an arry, splitting on commas
        arr = arr.split(",");
    }

}