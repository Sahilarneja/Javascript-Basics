let a="Sahil" //Single colon also allowed
console.log(a)
console.log(a[1])
console.log(a.length)

//Template Literals
let boy1="Promod"
let boy2="Nikhil"
let sentence=`${boy1} is a friend of ${boy2}`
console.log(sentence)
// ` = backticks
/*we can insert variables directly in template 
literals this is string interpolation
*/

//Escape Sequence Characters
let fruit='Bana\'na'
console.log(fruit)
console.log(fruit.length)
console.log(fruit.toUpperCase()) //to convert string into uppercase
console.log(fruit.toLowerCase())//to convert string into lowercase
console.log(fruit.slice(2,5)) //prints char from 2 to 4
console.log(fruit.slice(2))
console.log(fruit.replace("Ba","per")) //replaces char in a string

let name2="   SAHIL     "
console.log(name2) //will be printed with spaces
console.log(name2.trim()) //remove whitespaces

/*Other escape sequences are:
\n => new line
\t => Tab
\r => Carriage Return
*/

let name="Sahil"
let friend="Aman"
let friend2="Ram"
console.log(name.concat(" is a friend of ",friend," & ",friend2))
/*concat is a method used to join the string*/

//print a string using for loop
let fr="Sahil"
// console.log(fr[0])
let i=0
for( i=0;i<fr.length;i++){
    console.log(fr[i])
}
