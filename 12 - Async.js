/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Callback hell
function getRecipe(){
    setTimeout(()=>{
        console.log("Calling api");
        setTimeout(()=>{
            console.log("Doing something with data");
            setTimeout(()=>{
                console.log("Returning data");
            },3000);
        },2000);
    }, 1500);
}
//This triangular shape of code is a classical example of callback hell
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Promise
    const executeApi = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['data','data','data']);
        },1500);
    });

    executeApi
    .then((dataArray) => { //executes the function and after that executes the "then" part
        console.log(dataArray);
        return dataArray;
    }).then((dataArray)=>{
        console.log(dataArray[2]);
    })
    .catch((error)=>{
        console.log("Error");
    });
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Async await
async function  getDataAsync(){
    const dataArray = await executeApi();
}
getDataAsync();
//Async functions can be used as promises
getDataAsync()
.then()
.catch();
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Fetch
let url = 'google.com';
fetch(url)
.then()
.catch();
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region CORS
//If you have cors problems and you don't own the api you can use crossorigin.me to access
fetch('https://crossorigin.me/https://google.com/');
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/