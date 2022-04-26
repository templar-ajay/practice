console.log("welcome to Object Protoypes");
"use strict";
let obj = {
    name : "Ajay",
    interest :[ "Coding ","adventure Sports"],
    Goal : "God",
    Age : 22
}
console.log(obj);

// obj.prototype.getName = function(){
//     return this.name;
// }
// Prototype cannot be Set to Object ,
// Prototype is set to Object Constructors


function ObjConstructor(name, goal,interest,age){
    this.Name = name;
    this.Goal = goal;
    this.Interest = interest;
    this.Age = age
}

let obj2 = new ObjConstructor("Ajay" , "God" , ["Coding","Adventue Sports"],22)

console.log(obj2);

ObjConstructor.prototype.getName = function(){
    return this.Name;
}

ObjConstructor.prototype.newName = function(newName){
    this.Name = newName
}


