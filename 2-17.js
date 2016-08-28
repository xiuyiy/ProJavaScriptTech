/**
 * Created by xiye on 8/27/16.
 */

var obj = {
    yes: function(){
        //this == obj
        this.val = true;
    },
    no: function(){
        this.val = false;
    }
};

//We see that there is no val property in the 'obj' object
alert(obj.val == null);

//We run the yes function and it changes the val property
//associated with the 'obj' object
obj.yes();
alert(obj.val == true);


//However, we now point window.no to the obj.no method and run it
window.no = obj.no;
window.no();

//This results in the obje obj object staying the same ( as the context  was swithced to the windo object)
alert(obj.val == true);

//and window val property getting updated
alert(window.val == false); //--> very interesting