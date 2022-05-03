"use strict";
console.log("ES6 classses and inheritance");

class Employee{
    constructor (givenName,givenExperience,age){

        this.Name = givenName;
        this.Experience = `${givenExperience} years`
        this.Age = age;
    }

    Quote(){
        return `Anything that makes ${this.Name} weak , Physically , Mentally , or Spiritually, 
    ${this.Name} shall Reject as Poison 
        - Swami Vivekananda`
    }

    joiningYear(){
        let today = new Date()
        return today.getFullYear() - this.Experience
    }
    static add(a,b){
        return a*b;
    }
}

let Cheenu = new Employee("Cheenu",10,22)

console.log(Cheenu);
console.log(Employee.add(5,4))


class Programmer extends Employee{
    constructor(givenName,givenExperience,age,language,github){
    super(givenName,givenExperience,age)
    this.language = language;
    this.github = github;
    }
    favouriteLanguage(){
        if(this.language=="python"){
            return "python"
        }else return "Javascript"
    }

    static toThePower(a,b){
        return a**b
    }
}   

let Ajay = new Programmer("Ajay",1,22,"Javascript","https://github.com/templar-command0")
console.log(Ajay.favouriteLanguage())
console.log(Programmer.toThePower(3,3))