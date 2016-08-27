/**
 * Created by xiye on 8/26/16.
 */
//Set items to an array (object) of strings
var items = new Array("one", "two", "three");

//Set itemsRef to a reference to items
var itemsRef = items;

//Set items to equal a new object
items = new Array("new", "array");

//items and itemsRef now point to different objects.
//items point to new Array("new", "array");
//itemsRef points to new Array("one", "two", "three")
alert(items !== itemsRef);
