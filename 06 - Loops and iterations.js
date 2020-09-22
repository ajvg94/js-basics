//#region For loop
    for(var i=0;i<10;i++){
        console.log(i);
    }
/*
    for(initial value;condition;iteration value){
        do something;
    }
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region For in loop
    var object = { 
            a: 1, 
            b: 2, 
            c: 3 
        };

    for (var property in object) {
        console.log(`${property}: ${object[property]}`);
    }
/*
    for(property in object){
        do something;
    }
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region For of loop
    const array1 = ['a', 'b', 'c'];

    for (const element of array1) {
        console.log(element);
    }
/*
    for (variable of containerStructure) {
        do something
    }
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region While loop
    var i = 0;
    while(i<10){
        console.log(i);
        i++;
    }
/*
    while(condition){
        do something;
    }

*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Do while loop
    var i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 10);
/*
    do {
        do something
    } while (condition);
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Break and continue
/*
    break       breaks out of the current iteration cycle
    continue    skips the rest of the current iteration and goes to the next one (still inside the loop)
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region infinite While loop
/*
    while(1){//infinite loop
        do something;
        if(condition) break;//exits from the loop
    }
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region FOR OF
const arr6 = ['red','white','blue'];
for(let el of arr6){
    if(el == 'white') continue;
    el = white;
}
console.log(arr6);
//#endregion




