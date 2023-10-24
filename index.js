function recursif(number){
    
    let newNumber = number - 1;
    console.log(newNumber);

    if(number > 0 ){

        recursif(newNumber) 
    }
}

recursif(10);