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


