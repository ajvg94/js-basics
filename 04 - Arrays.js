//#region Array definition
//Collection of data
    var names = ['John', 'Mark', 'Jane'];
    var years = [1996, 2020, 1998];
    var numbers = new Array (1,2,3,4);
    var person = ['John', 'Smith', 36, false];//Arrays can also have mixed data types

    console.log(numbers[0]);//prints 1
    console.log(numbers);//prints length of array and elements  
    numbers[4] = 5;//adds element to a new position of the array 
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Array methods
    console.log(numbers.length);//returns length of the array

    numbers.push(6);//adds element to a new position of the array 
    numbers.unshift(0);//adds element to the start of the array
    numbers.pop();//returns and deletes last element of the array
    numbers.shift();//returns and deletes first element of the array

    numbers.indexOf(3);//returns index of the element in the array, if it doesn't exist returns -1
    numbers.includes(3);//returns true false
    numbers.findIndex(currentNumber => currentNumber > 10);//returns the index where the callback function is true
    numbers.find(currentNumber => currentNumber > 10);//returns the elements where the callback function is true
    console.log(...numbers);//also called spread operator, returns all elements of the array separated
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region MAP
/*
Let's us apply a function to all the elements of the array and return the array without using a for method
*/
years =  [1994,1995,1996];

let ages = years.map((year)=>2020-year);//[26,25,24]

//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region transform to array
/*
    ES5
    var elementArray = Array.prototype.slice.call(arrayElement)
*/
//#endregion