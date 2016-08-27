/**
 * Created by xiye on 8/27/16.
 */
//The second way of checking the type of an object is by referencing a property of all JavaScript objects called constructor
//The property is a reference to the function used to originally construct this object.


//Check to see if our number is actually a string
if(num.constructor == String)
    //If it is, then parse a number out of it
    num = parseInt(num);

//Check to see if our string is actually an array
if(str.constructor == Array)
    //If that's the case, make a string by joining the array using commas
    str = str.join(',');


/*
*  Variable             typeof Variable      Variable.constructor
*  {an:"object"}        object               Object
*  ["an", "array"]      object               Array
*  function(){}         function             Function
*  "a string"           string               String
*  55                   number               Number
*  true                 boolean              Boolean
*  new User()           object               User
* */