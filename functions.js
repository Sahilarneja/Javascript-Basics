/* a block of code designed to perform a particular task

function myFunc(){
    //code
}
*/

let a=1;
let b=2;
let c=3;

function avg(x,y){
    return (x+y)/2
}

console.log("Avg of a & b :"+avg(a,b))
console.log("Avg of b & c :"+avg(b,c))
console.log("Avg of a & c :"+avg(a,c))

//creating const function
const hello= ()=>{
    console.log("HELLO HOW ARE UH")
}

hello();