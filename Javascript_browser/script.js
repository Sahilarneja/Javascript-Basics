alert("hello")
// console.log("Hey Sahil")
// let a=8
// let b=4
// console.log(a+b)
 

alert("Enter the value of a")
let a=prompt("Enter the value of a ",10)  //10 is a default value given
a=Number.parseInt(a)
let write=confirm("Do you want to write it to the page")
if(write){
    document.write(a)
}else{
    document.write("Please allow me to write")
}
document.write(a)   //it will write the input given by user
alert("you entered a of type: "+ typeof a)



document.body.style.backgroundColor =" white"   //this will change the color
