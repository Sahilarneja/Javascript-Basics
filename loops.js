/*for loop: loops a block of code no. of times
for in loop: loops through the keys of an object
for of loop: loops through the values of an object
while loop: loops a block based on a specific condition
do-while loop: while loop varient whivh runs atleast once */
//  for(let i=0;i<5;i++){
//     console.log(i)
//  }

//Program to add first n natural no.
let sum=0
let n=prompt("Enter the number!")
n=Number.parseInt(n)
for(let i=1;i<=n;i++){ // let is block level agr yha var hta toh value fixed rhti 
    sum=sum+i;
}

// console.log("Sum of n natural no. are: "+sum)


//For in loop
let obj={
    harry: 45,
    Sahil: 50,
    Krati: 55,
    Sanyam: 45
}
for(let a in obj){
    console.log("Marks of "+a+" are "+obj[a])
}


//For of loop
for(let b of "Sahil"){
    console.log(b)
}