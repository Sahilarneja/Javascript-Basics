let a = prompt("Hey what's your age?") //prompt can only be executed on browser
// console.log(typeof a)

//alert tells the user whereas prompt asks the user

// alert(a)

a=Number.parseInt(a) //Converting a String to a number
console.log(typeof a) //This will show number whic is converted from string


/*conditional statements
1. if statement
2. if... else statement
3. if... else if... else statement
*/ 

//1. if statement 
if(a>0){
    alert("This is a valid age")
}

//2. if else statement
if(a>0){
    alert("This is a valid age")
}else{
    alert("this is an invalid age")
}

//3. if else if else statement
if(a<0){
    alert("This is an invalid age");
}
else if(a<9){
alert("You are a kid");
}
else if(a<18 && a>=9){
    alert("You can think of driving");
    }
else{
    alert("You can now drive")
}

/*ternary operator(?)-- evaluates a condition and executes a block of code
base on the condition*/
console.log("You can",(a<18? "not drive" :"drive"))
//this means agr aap 18 se chote ho not drive otherwise drive