/*note: if the condition never becomes false, the loop will never end 
and this might crash the runtime */

//While Loop
let n=prompt("Enter the value of n")
n=Number.parseInt(n)
let i=0;
while( i<n){
    console.log(i)
    i++;
}

//Do-while loop
let a=prompt("Enter the value of a")
a=Number.parseInt(a)
let j=0;
do{
    console(j)
    j++;
}while(j<a)
