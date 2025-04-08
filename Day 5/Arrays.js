const { log } = require("node:console")


//using array literals
let names=["A","b","c","d"]
console.log(names);


let numbers=new Array(5);
numbers=[1,2,3,4,5]
console.log(numbsrs);


//push - add one or more elements to the end of an array

let letters=["a","b","c","d","e"];
letters.push("f");
console.log(letters);


//pop - aremove one or more elements to the end of an array

let lettersremove=["a","b","c","d","e"];
letters.pop();
console.log(letters);


//shift - remove first value 

let lettersremove=["a","b","c","d","e"];
letters.shift();
console.log(letters);


//unshift - add one or more elements to the beginning of an array

let letters=["a","b","c","d","e"];
letters.unshift("X","Y","z");
console.log(letters);


//Slice() - Extracts a section of an array without modifying the orginal

let letters=["a","b","c","d","e"];
letters.slice(1,4)
console.log(letters);


//Splice() - add or remove elements from the array

let letters=["a","b","c","d","e"];
let result=letters.splice(1,1,"x");
console.log(result);


//Spread syntax[...array]

let numbers1=[1,2,3,4];
let numbers2=[5,6,7,8];

let mergedArray=[...numbers1,...numbers1];
console.log(mergedArray);

let mergedConcate=[numbers1.concat(numbers2)];


//sorting the array -->lexicographical wat

let num=[4,5,3,2,5];
num.sort();
console.log(num);

//to correctly sort in ascending
num.sort((a,b)=>a-b)
console.log(num);


//to correctly sort in descending
num.sort((a,b)=>a-b)
console.log(num);

//filter method
let even= num.filter((num)=>num%2===0);
console.log(even);


//map method
let squared= num.map((num)=>num*num);
console.log(squared);














