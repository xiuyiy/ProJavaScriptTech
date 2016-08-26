/**
 * Created by xiye on 8/26/16.
 */
function Lecture(name, teacher) {
    this.name = name;
    this.teacher = teacher;
}

Lecture.prototype.display = function() {
    return this.teacher + " is teaching " + this.name;
}

function Schedule(lectures) {
    this.lectures = lectures;
}

Schedule.prototype.display = function() {
    var str = "";

    for(var i = 0; i < this.lectures.length; i++) {
        str += lectures[i].display() + " ";
    }

    return str;
}