/**
 * Created by xiye on 8/27/16.
 */


//An Object constructor that represents a classroom
function Classroom(students, teacher){
    //A private method used for displaying all the students in the class
     function disp() {
         alert(this.name.join(','));
     }

    //Store the class data as public object properties
    this.students = students;
    this.teacher = teacher;

    //Call the private method to display the error
    disp();

}

//Create a new classroom object
// Apparently, class is a key word in JavaScript
 var myClass= new Classroom(["John", "Bob"], "Mr. Smith");

//Fails, as disp is not a public property of the object
myClass.disp();