//Q1
let age=prompt("Enter the age: ")
age=Number.parseInt(age)
if(age<18){
    alert("You can't drive")
}else{
    alert("You can drive")
}

//Q2 by creating a function

let age2=prompt("Enter your age")
let runAgain=true;
if(age<0){
    console.error("age entered is negative")
}

while(runAgain){
    const canDrive=(age2)=>{
        age2>18?true:false
         age2=prompt("Enter your age")
        age2=Number.parseInt(age2)
}

if(canDrive(age2)){
    alert("yes you can drive")
}else{
    alert("you cannot drive")
}
runAgain=confirm("Do you want to play again?")
}


//Q4
let a=prompt("Enter a number")
a=Number.parseInt(a)
if(a>4){
    location.href="www.google.com"
}else{
    console.log(a)
}

//Q5
let color=prompt("Enter the color")
document.body.style.background=color