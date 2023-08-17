//Q1
let age=prompt("What is your age")

if(age>10 && age<20){
console.log("age is between 10 & 20")
}
else{
    console.log("Invalid age")
}

//Q2

switch(age){
    case 12:
        console.log("Your age is 12")
        break
    case 13:
        console.log("Your age is 13")
        break
    
        case 14:
        console.log("Your age is 14")
        break
    default:
        console.log("Your age is not specified")
        break
}

//Q3
let a=prompt("Enter the number")
if(a%2==0 && a%3==0){
    console.log("True")
}else{
    console.log("False")
}

//Q4
//use ternary operator
let b=prompt("Enter Your age:")
console.log("you can",(b>18? "drive" : "Not Drive"))