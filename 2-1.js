/**
 * Created by xiye on 8/26/16.
 */
//Example of Multiple Variables Referring a Single Object

//Set obj to an empty object
var obj = new Object();

//objRef now
var objRef = obj;

//Modify a property in the original object
obj.oneProperty = true;

//We now see that change is represented in both variables
//Since they both refer to the same object
alter(obj.oneProperty === objRef.oneProperty);


