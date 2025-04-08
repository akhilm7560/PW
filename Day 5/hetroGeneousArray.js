


let hetroArray=[10,2,3,1,"Java","TypeScript","C#"];

let sortedArray=hetroArray.sort((a,b)=>{

    //check if both are numbers
    if(typeof a==="number" && typeof b==="number")
    {
        return a-b;//sort the numbers in ascending order
    }
    
    //if one is number and one is string

    if(typeof a==="number")
    {
        return -1;//number has to come before string
    }

    if(typeof b==="number")
    {
        return 1;//string comES after the number
    }

    //if both ARE STRINGS

    return a.localeCompare(b);//sort strings alphabetically

    console.log(sortedArray);
    
})
