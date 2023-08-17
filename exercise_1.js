/*Write a program to generate a random number and store it in a variable
the program then takes an input from the user to tell the, whether the guess 
wass correct,grater or lesser than original number.
100-(no of gusses) is the score of the user
thw program is expected to terminate once the number is guessed.
number should be between 1-100 */



let random_number=Math.floor(Math.random()*100)
//generates random integer between 1 and 100
let no_of_guesses=0
let Guess 
do{Guess=prompt("Enter Number")
if(Guess<random_number){
    console.log("Guess is lesser than original number")
}else if(Guess>random_number){
    console.log("Guess is greater than original number")
}
else{
    console.log("Guess is correct")
}
no_of_guesses = no_of_guesses+1
}while(Guess!=random_number){
    let sco=console.log("Score ",100-no_of_guesses)
    console.log("random_number", random_number)
}