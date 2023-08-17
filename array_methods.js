let num=[1, 2, 3, 34, 4]
//1. toString()
let b=num.toString() //b is now a string
console.log(b)
//2. join()
let c=num.join("_")
console.log(c, typeof c) //Join()- this method get join in the array

//3. pop()
num.pop() //removes a value from array
console.log(num)

//4. push()
console.log(num.push(5)) //adds a new element in array
console.log(num)

//5. shift() - removes first element and returns it
console.log(num.shift())
console.log(num) //element will be removed from first(will display updated res)

//6. unshift() - adds element at beginning returns new array length
console.log(num.unshift(1))
console.log(num) //new element added at first

//7. concat() - joins two array
let num2=[1,2,3,4]
console.log(num.concat(num2))

//8. delete - this is an operator
delete num[0]
console.log(num) //array length will not get decreased it'll remain same

//9. sort() - will sort the array
console.log(num.sort()) //modifies the original array
let compare=(b,a)=>{ // compare funstion is used to sort in asc/desc
return a-b
}
console.log(num.sort(compare))

//10. splice() - used to add any new item in an array (returns deleted item)
// also modifies array
num.splice(2,3, 1021, 1022, 1023) 
/*index 2 se elements delete krna 
shuru kro 3 elements delete kro uskebd hum jitne mrzi elements add krskte h*/
console.log(num)

//11. slice() - slice out a peice from an array it creates a new array
const num3=[1,2,3,4]
console.log(num3.slice(2)) //index 2 se saare elements return honge
console.log(num3.slice(1,3)) // index starts from 1 and ends at 3 but last 
//                              print ni hga(last index not included)


//12. reverse() - will reverse the array
// console.log(num.reverse())
