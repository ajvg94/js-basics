//#region DATA TYPES
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//Variable: container of a value for your code.
var firstName = "John";
/*
    In JS there are 5 different data types:
        1. Number: floating point numbers, decimals and integers.
        2. String: sequence of characters.
        3. Boolean: true or false
        4. Undefined: doesn't have a value.
        5. Null: non-existent.
    Also in JS the variable data type is dynamic there's no need to specifically define the data type for each one of them.
*/
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//Type coercion
var age = 28;
console.log(firstName + ' '  + age);
/*
    This works because JS converts data types as it needs it. In this case 'age' is automatically converted to a string when is needed
*/
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//Variable mutation
age = 'twenty eight';
console.log(age);
/*
    JS changes data types when it needs it.
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region OPERATORS
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//Operators
var year = 2020;
var birthDay = year - 28;
console.log(birthDay);
/*
    Math operators:
        +
        -
        *
        /
    Logical operators: returns boolean
        >
        <
        >=
        <=
    Auto operators
        +=
        -=
        *=
        /=
    Increment by 1
        x++
        x--
    Equality operator '==' and '==='
        ==      Just checks for the value, it doesn't care about data types 0 == '0'
        ===     Checks for value AND also for data type 0 === 0

*/
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//Type of
console.log(typeof(year));
/*
    Returns the data type of the variable
*/
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//Operator precedence
/*
    For more information about operator precedence please refer to this link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/

