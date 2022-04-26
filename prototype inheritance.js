"use strict";
console.log(`Learn Prototype Inheritance`);

const proto = {
    changeName : function(newName){
        this.name = newName
    },
    slogan : function(){
        return `My Company is Best`;
    }
    ,changeGoal : function(newGoal){
        this.goal = newGoal
    }
}


// This creates Ajay Object
const ajay = Object.create(proto);
ajay.name = "Ajay";
ajay.goal = "Bhagwan";
ajay.changeName("Command0");
// console.log(ajay);

// Alternative Syntax
// THis also Creates Ajay Object

const Ajay1 = Object.create(proto, {
    name : {value: "Ajay" , writable:true},
    goal : {value : "Bhagwan"}
})
Ajay1.changeName("AJay1")
// Ajay1.changeGoal("newGoal")
// will return error

console.log(Ajay1);

// Employee Constructor
function Employee(naem, salary ,experience){
    this.name = naem;
    this.salary - salary;
    this.experience = experience
}

function Rohan(name,salary,experience,language){
    
}
//slogan
// Employee.prototype.slogan = function(){
//     return `Talentelgia is the best Company , regards ${this.naem}`
// }