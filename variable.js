//container used to store any value
let a=67 //a contains 67 ,also can use both let or var
console.log(a);
 a="sahil";
 console.log(a);
 //js is case sensitive

 /*var vs let in javascript
 1. var is globally scoped while let & const are block scoped
 2. var can be updated & re-declared within its scope
 3. let can be updated but not re-declared
 4. const can neither be updated nor re-declared
 5. var variables are initialized with undefined whereas let and const 
    variables are not initialized
6.  const must be initialized during declaration unlike let and var
 */

 //var -- this shows that var can be updated
 var b="Sahil";

 {
    var b="hello";
    console.log(b);
 } 
 console.log(b);


 //let
let c="Harry";
{
    let c="this";
    console.log(c);
}
console.log(c);
/*this shows let is block scope as in block it shows diff output as
 compared to console.log present outside of block*/

/* keypoints:
-don't use var
-use let or const(const- only when uk that variable will not be 
-re-declared or updated) */

