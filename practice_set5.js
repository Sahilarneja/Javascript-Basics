//Q1
var inputArray=[]
var size=prompt("Enter size of array: ")
for(var i=0;i<size;i++){
    inputArray[i]=prompt("Enter element")
}
console.log(inputArray)

//Q2
let arr2=[1,2,3,4,5,6,7,83]
let a;
do{
     a= prompt("Enter a number")
    a=Number.parseInt(a)
    arr2.push(a)
    console.log(arr2)
}while(a!=0);
console.log(arr2)

//Q3
let arr3=[10,23,30,45,50]
let a3=arr3.filter((a)=>{
    return a%10==0
})
console.log(a3)

//Q4
let arr4=[1,2,3,4]
let a4=arr4.map((value)=>{
    return value*value
})
console.log(a4)

//Q5
let arr5=[1,2,3,4,5,6,7]
let a5=arr5.reduce((x1,x2)=>{
    return x1*x2
})
console.log(a5)