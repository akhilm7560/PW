

function userProfile(name)
{
    console.log(`Hello, ${name}!`);
    
}
userProfile("X")

//2
let double =(a)=>{b=a*2

    return b
}
//double(2)
console.log(double(2));


//3
let Afunc= function()
{
    setTimeout(() => {

        console.log("This message is delayed by 2 seconds");
    }, 2000);
}
Afunc();

//4
function getUserData(call)
{
    setTimeout(() => {

        call();
     }, 3000);
}

function userData()
{
console.log("The users name is X and age is 22");
    }
getUserData(userData)


