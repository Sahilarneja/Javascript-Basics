//Arrays are variable that can hold more than one value
let marks_class_12=[91, 82, 63, 84]
console.log(marks_class_12)

console.log(marks_class_12[1]) //Accessing individual value
console.log(marks_class_12.length) //finding the length

marks_class_12[4]=80 //adding new value
marks_class_12[0]=99 //changing the value 
console.log(marks_class_12)
console.log(typeof marks_class_12)

//for loop
for(let i=0;i<marks_class_12.length;i++){
    console.log(marks_class_12[i])
}
