
//hoisting

//internally--> var x; declaration is happened automatically (here x value is undefined)
//var x=10;
console.log(x);
var x=10;//how does the js reacts for this



//internally--> let y; (Throws a reference error)
//var x=10;
console.log(x);
let y=10;


//internally--> const z; (Throws a reference error)
//var x=10;
console.log(x);
const z=10;