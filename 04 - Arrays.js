//#region Array definition
//Collection of data
    var names = ['John', 'Mark', 'Jane'];
    var years = [1996, 2020, 1998];
    var numbers = new Array (1,2,3,4);
    var person = ['John', 'Smith', 36, false]//Arrays can also have mixed data types

    console.log(numbers[0]);//prints 1
    console.log(numbers);//prints length of array and elements  
    numbers[4] = 5;//adds element to a new position of the array 
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Array methods
    console.log(numbers.length);//returns length of the array

    numbers.push(6);//adds element to a new position of the array 
    numbers.unshift(0)//adds element to the start of the array
    numbers.pop();//returns and deletes last element of the array
    numbers.shift();//returns and deletes first element of the array

    numbers.indexOf(3);//returns index of the element in the array, if it doesn't exist returns -1
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/