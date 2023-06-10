// for (initialization; condition; increment/decrement) {
//      code to be executed
// }

const form = document.querySelector('form');   //grab the form 
form.addEventListener("submit", tenPowers);

function tenPowers(event) {
    event.preventDefault();
    const base = Number(event.target.numInput.value);
    // document.querySelector('h2').innerText = "hello";

    
    let wordArray = []; //declaring an array called wordArray

/*
    Loops will continue running until the set conditions are met. In the example below 
    i is defined before the while loop and i < 10 is the condition it must meet before
    stopping. i++ will make it meet the condition after 10 loops.
    i = 0 
    while (i < 10) {
        i++
    }
*/
    i = 0 //declares a variable
    while (i < 10) { // while(*conditions*){
        console.log(base + " to the power of " + i + " = " + base ** i)
        wordArray[i] = " " + base + " to the power of " + i + " = " + (base ** i).toLocaleString() + " ";
            i++ //increase the value of i by one in each loop
    }


    console.log(wordArray);

    document.getElementById("output").innerText = wordArray.join('\n'); //prints output 

}
