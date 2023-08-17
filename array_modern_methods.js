//Map , Filter & reduce (they do not change initial or original array)
//1. Map() - creates a new array by performing some operation on each array element
let arr=[1,2,3,4]
let a=arr.map((value ,index, array)=>{
 console.log(value, index, array)
 return value +1
})
console.log(a) //new array will be printed
//map creates a new array

/*2. Array filter method -- filters an array with values that passes a test creates
a new array*/
let arr2=[45, 23, 21, 0, 3, 5]
let a2=arr2.filter((a)=>{
    return a<10
})
console.log(a2)

//3. Array Reduce method - reduces an array to a single value
let arr3=[1, 2, 3, 5, 2, 1]
let a3=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a3)