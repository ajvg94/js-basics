/*
In a function declared as
    function(args){

    }
the scope of this is global (the same as the window).
*/
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
/*
Inside an object THIS contains the properties of the object
    var person = {
        name: 'juan',
        lastname: 'perez',
        nameAndLastname: function(){
            console.log (this)//name, lastname
        }
    }
*/
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region THIS in Arrow functions
/*
    Inside normal functions this points to the global element not a particular object for example
    
    //ES5
    var box5 = {
        color:'green'
        click: function(){
            console.log("This box is:"+this.color);//prints undefined because this is searching for color in the global scope.
        }
    }

    //ES6
    var box6 = {
        color:'green'
        click: () => {
            console.log("This box is:"+this.color);
        }
    }

*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/

