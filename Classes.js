/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Class declaration
class Person{
    constructor(name, job, yearOfBirth){//every class SHOULD have a constructor
        this.name= name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        let age = 2020 - this.yearOfBirth;
        console.log(age);
    }

    static HelloWorld(){//you can create methods for the class and invoke them just with the class like this
        console.log('Hello world!');//Person.HelloWorld();
    }
}
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Subclasses
class SuperClass{
    constructor(name, job, yearOfBirth){//every class SHOULD have a constructor
        this.name= name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        let age = 2020 - this.yearOfBirth;
        console.log(age);
    }

    static HelloWorld(){//you can create methods for the class and invoke them just with the class like this
        console.log('Hello world!');//Person.HelloWorld();
    }
}

class SubClass extends SuperClass{
    constructor(name, job, yearOfBirth,car,cont){//every class SHOULD have a constructor
        super(name, job, yearOfBirth);
        this.car = car;
        this.cont = cont;
    }

    addCont(){
        this.cont++;
    }
}

let subClassEx = new SubClass('John','Farmer',1994,'Mustang',4);
subClassEx.addCont();
console.log(subClassEx);
//#endregion