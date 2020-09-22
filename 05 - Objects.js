//#region Object definition
//Collection of data organized by name of properties
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        family: ["Jane", "Mark", "Bob"],
        isAlive: true
    };
    console.log(person);

    var person2 = new Object();
    person2.firstName = "John";
    person2.lastName = "Doe";
    person2.age = 25;
    person2.family = ["Jane", "Mark", "Bob"];
    person2.isAlive = true;
    console.log(person2);


    //Access to property
    console.log(person.firstName);
    console.log(person['firstName']);
    var x = 'firstName';
    console.log(person[x]);
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Object and methods
//You can define a function inside a property of an object in the following way
    var person3 = {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        family: ["Jane", "Mark", "Bob"],
        isAlive: true,
        birthYear: function (age){
            return 2020 - age;
        }
    };

    console.log(person3.birthYear(27));
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Key concepts: Constructor, Inheritance and Prototype chain
/*
Inheritance is when one object is based in another object, when it uses properties of other object.

It works by using prototypes that is a property of every object in JS.

The prototype property of an object is where we put methods and properties that we want other objects to inherit.

The constructor's property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it.

When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found the search moves on 
to the object's prototype. This continues until the method is found: (prototype chain).
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region  Function Constructor
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2020-this.yearOfBirth);
    };
};

var john = new Person ('John', 1994, 'teacher');
john.calculateAge();
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Deconstructing
//you can get the elements of an object in the following way
let pet = {
    type: "dog",
    name:"scooby"
};

let {petType,petName}= pet;
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/