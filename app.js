// function otterLovePrompt(){
//     let otterAnswer = prompt("Do you love otters?");
//     if (otterAnswer == "yes")
//     document.write("Welcome fellow otter lover!");    
//     if (otterAnswer != "yes")
//     document.write("That is too bad, look at how cute they are and maybe reconsider?"); 
// }

// otterLovePrompt();

function otterTypeNumber(){
    let otterTypeAnswer = prompt("how many distinct species of otters exist?");
    if (otterTypeAnswer == "13") {
        alert("CORRECT! There are 13 types of otters around the world"); 
    }
    if (otterTypeAnswer > 13) {
       alert("Incorrect, there are less otter types than that"), otterTypeNumber();
    }
    if (otterTypeAnswer <= 12) {
        alert("Incorrect, there are more otter types than that"), otterTypeNumber();
    }
    }

// otterTypeNumber();


function otterPics(){
let otterPicsAnswer = prompt("How many otter pictures do you want to see?");
let pictures = ''
for (let i = 0; i < otterPicsAnswer; i++){
    pictures += "<img src='Otter2.jpeg'/>"
}
document.write(pictures)
}