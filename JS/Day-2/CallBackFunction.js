

//callBack Function


function greetEveryone(name,call){

console.log("Hello"+name);
call();

}

function displayThanks(){

    console.log("Thanks for attnding");
    
}

greetEveryone("Hi Hello",displayThanks)


//Example 2

function checkAvailability(movieNmae,callback){

    console.log("Checking");
    setTimeout(() => {

        console.log(`Movie ${movieNmae} is available`);  //template literal part
        callback();
        
        
    }, 2000);
    

}

function playMovie()
{
    console.log(`playing...`);
    

}

checkAvailability("spider",playMovie)