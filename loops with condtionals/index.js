// for (initialization; condition; increment/decrement) {
//      code to be executed
// }

const form = document.querySelector('form');   //grab the form 
form.addEventListener("submit", vowelCounter);
let vowelsInName = 0;


function vowelCounter(event) {
    event.preventDefault();
    const inputtedName = String(event.target.nameInput.value);
    
//loops based on how many letters are in a name
//for(declare var, condtion, increment){
    for (i = 0; i < inputtedName.length; i++) {
        console.log(inputtedName[i]);


// conditionals below checks for vowels and adds 1 to vowelsInName
        if (inputtedName[i].toLowerCase() === "a") {
            vowelsInName ++ ;
        }else if (inputtedName[i].toLowerCase() === "e") {
            vowelsInName ++ ;
        }else if (inputtedName[i].toLowerCase() === "i") {
            vowelsInName ++ ;
        }else if (inputtedName[i].toLowerCase() === "o") {
            vowelsInName ++ ;
        }else  if (inputtedName[i].toLowerCase() === "u") {
            vowelsInName ++;
        }
    


    }


    console.log(vowelsInName);

    document.getElementById("output").innerText = `your name has ${vowelsInName} vowels in it`;

    vowelsInName = 0

}
