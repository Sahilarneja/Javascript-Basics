//Q2

let obj={
    Sahil: 30,
    Aman: 40,
    Dhruv: 50
}

for(let a in obj){
console.log("Marks of "+a+" are "+obj[a])
}


//Q1
for(let i=obj;i<=obj;i++){
    console.log(i)
}

//Q3

let a=1;

a=Number.parseInt(a)
while(b!=a){
    let b=prompt("Enter the number");   
    console.log("Try Again....")
}
console.log("You have entered a correct number")


//Q4
function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5
}
console.log(mean(4,5,6,7,8))