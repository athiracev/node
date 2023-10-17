// node js

// console.log("running");
const array=["a","b","c"];
// array.push("d","e");
// spread operator 
const newArray =[...array,"d"];
console.log(newArray);


// ###########function

function newFun(){
    return 10;
}
console.log(newFun());

// using arrow function

const newFun1 = () =>{
    return 20;
};
console.log(newFun1());

// if returns only one value 

const newFun2 =() =>100;
console.log(newFun2());

// set interval

// setInterval(() => {
//     console.log("Running");
// },5000);

// setTimeout(()=>{
//     console.log("catch");
// },1000);

// const interval = setInterval(()=>{
//     console.log("running");
// },1000);

// setTimeout(()=>{
//     clearInterval(interval);
// },3000);

console.log(__dirname);
console.log(__filename);