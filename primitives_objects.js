//nn bb ss u -- Primitives in js
let a=null;
let b=345;
let c=true; //can also be false
let d=BigInt("567")+BigInt("3");
let e="Sahil";
let f=Symbol("I am a nice symbol");
let g=undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof d);

//objects in Js
//this is also said as making a dictionary of following items
const item=
{
    "Sahil":true,
    "Shubh":false,
    "Aman":67,
    "Rohan":undefined
}
console.log(item["Sahil"]);
console.log(item["Aman"]);