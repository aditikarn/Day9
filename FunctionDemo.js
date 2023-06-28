//Using function name//
function calcAddition(number1,number2){
    return number1+number2;
}
console.log(calcAddition(10,7));

//without function name-using variable declaration//
const square=function(number){
    return number*number;
};
const x=square(4);
console.log(x);

//arrow function
const a=["Hydrohen","Hellium","Lithium","Beryllium"];

const a2=a.map(function(s){
    return s.length;
});
console.log("Normal way",a2);
const a3=a.map((s)=>s.length);

console.log("Using Arrow Function",a3);
