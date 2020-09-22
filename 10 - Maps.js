/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Map or hash map -> lets us map specific string keys to arbitrary values
    const question = new Map();
    question.set('question','What year is it?');
    question.set(1,'2001');
    question.set(2,'2020');
    question.set(3,'2021');
    question.set('correct',3);
    question.set(true, 'correct answer');
    question.set(false, 'incorrect answer');

    question.get('question');
    console.log(question.size);//returns quantity of elements, similar to length

    if(question.has(4)) console.log('Question has 4 answers');//checks if the given index name exists
    

    //You can loop through a map in the following way
    question.forEach((value, key) =>
        console.log(`THIS IS ${key} AND ITS SET TO ${value}.`));

    for(let [key,value] of question.entries()){
        console.log(`THIS IS ${key} AND ITS SET TO ${value}.`);
    }

    question.delete(4);//deletes the given index
    question.clear();//clears all the map
/*
   
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/