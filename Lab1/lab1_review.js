/*
Purpose: Review JS concepts
Protoypes vs Classes
Regular functions, anonymous functions, arrow functions, callback functions
MERN: N stands for Node.js
*/

var globalVar = 100
let localVae = 200

function funcName(){
    let varInFunc = "Local"
}

// console.log(varInFunc);

//Prototype -> One time use obj from prototype
const oneTimeUseObj = {
    prop1 : "Christian",
    prop2 : "COMP3123",
    method1 : function (param1) {
        console.log(param1);
    }
}

console.log(oneTimeUseObj);
console.log(oneTimeUseObj.prop1);
console.log(oneTimeUseObj.prop2);
oneTimeUseObj.method1("Hello world")

//Protoype - using a constructor
function Student (student_name_p, course_p, lunch_p) {
    this.student_name = student_name_p
    this.course = course_p
    this.lunch = lunch_p

    this.method1 = function (param1) {
        return param1
    }
}
const morning_student = new Student("Christian", "COMP3123", "Sandwhich")
console.log(morning_student);
console.log(morning_student.student_name);
console.log(morning_student.method1(morning_student.lunch));

class Prof {
    constructor (prof_name_p) {
        this.prof_name = prof_name_p
    }
    method1 (lunch){
        console.log(lunch);
    }
}

const morning_prof = new Prof("Laily")
console.log(morning_prof.prof_name);
console.log(morning_prof.method1("Burger"));