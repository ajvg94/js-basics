//#region Simple function
/*
    function name(arguments){
        do something;
        return something;
    }

    name(arguments);
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Function expression
/*
    var name = function (arguments){
        do something;
        return something;
    }

    name(arguments);
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region First class function
/*
    It is a function that is called and then disappears, it's main purpose is data privacy

    (function (parameter){
        console.log(parameter);
    })(parameter);

    You cant call or access this functions parameters outside of the ()
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Closures
/*
    It is a function that returns another function and it can also use argument of its parent function because it is in its scope

    function parent(argument){
        return function child(argument2){
            do something with argument;
        }
    }

    parent(argument)(argument2);
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/