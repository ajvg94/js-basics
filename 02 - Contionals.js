//#region IF ELSE condition
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//If else statements
/*
    if(condition)
    else if(condition)
    else
*/
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
// Abbreviated IF
/*
    (condition) ? conditionTRUE : conditionFALSE;
*/
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//Important IFs
    var x;
    if (x) console.log(x);//has a value
/*
    if (variable)
    This checks for: null, undefined, NaN, empty string (""), 0, false
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Boolean logic operators
/*
    AND     &&      All conditions must be met          true if ALL true
    OR      ||      Only one condition must be met      true if ONE true
    NOT     !       Returns the opposite                inverts true/false value
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Switch statement
    var job = 'teacher';
    switch (job){
        case 'teacher':
            console.log('Teaches how to code.');
            break;
        case 'driver':
            console.log('Drives a car.');
            break;
        case 'designer':
            console.log('Uses photoshop.');
            break;
        default:
            console.log('Lives.');
            break;
    }
/*
    if you don't use break after each condition it keeps evaluating all the other conditions
    default -> if neither condition is met then it goes to the default one.
    It is not usually recommended to use switch
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region IF vs SWITCH
/*
    https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/ch04.html#if-else_versus_switch

    You can replace multiple if else statements with a switch in the following way:
        switch(true){
            condition1:
                do something;
                break;
            condition1:
                do something;
                break;
            condition1:
                do something;
                break;
            default:
                do something;
                break;
        }
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
