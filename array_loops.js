let arr=[10,20,30,40]

//for loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

//for each Loop
arr.forEach((element)=>{
console.log(element)
})

//Array.from - used to create an array from any other object
let name="Sahil"
let arr2=Array.from(name)
console.log(arr2)

//for-of loop
for(let i of arr){
    console.log(i)
}

//for-in
for(let i in arr){
    console.log(i+" : "+arr[i])
}