/*Buttons*/
const addWordPage = document.querySelector(".addWordPage");
const homePage    = document.querySelector(".homePage");
const gamePage    = document.querySelector(".gamePage");

/*Go home button*/
function goHomePage(){
    homePage.style.display = "block";

    addWordPage.style.display = "none";
    gamePage.style.display = "none";
}

/*Go game button*/
function goGamePage(){
    gamePage.style.display = "block";

    addWordPage.style.display = "none";
    homePage.style.display = "none";

    //Game:
    selectRandomWordIn(secretWordListAdded)
    //drawInvisibleWord() Writes the secret word in display:"none";
    dibujarCanvas()
    drawLinesForWord()
}

/*Go add word page button*/
function goAddWordPage(){
    addWordPage.style.display = "block";

    gamePage.style.display = "none";
    homePage.style.display = "none";

    inputTexto.focus();
}

/*Reload page button*/
function reloadPage(){
    window.location.reload();
}

/*Clean input button*/
const inputTexto = document.querySelector(".encryptInput");
const cleanButton = document.querySelector(".cleanButton");

function cleanInput() {
    inputTexto.value="";
    inputTexto.focus();
}


/*Save word button*/

//original list: var secretWordListAdded = ["retro", "computer", "language", "search", "practice"];

//practice list:
var secretWordListAdded = ["retro", "computer"];
var secretWord = "";

//Show list in console for verification:

function saveNewWord(){
    //This button saves the word written and adds it to the secretWordListAdded array. Otherwise it displays an alert.
    if(inputTexto.value==""){
        alert("Write a word to be used in the game!");
        inputTexto.focus();
    }

    else if (inputTexto.value.length > 8){
        alert("That word is too long! Try a word with 8 characters or less");
        inputTexto.value="";
        inputTexto.focus();
    }

    else if(secretWordListAdded.includes(inputTexto.value)){
        alert("Write something else! That word is already on the list");
        inputTexto.value="";
        inputTexto.focus();
    }

    else {
        secretWordListAdded = add_ToArray_(inputTexto.value, secretWordListAdded);
        inputTexto.value="";
        inputTexto.focus();
    }
}

function add_ToArray_(string, array){
    //adds the string given to the array given and returns the final array.
    array.push(string)

    return(array)
}


/*Add new word page*/
inputTexto.addEventListener("keyup", e=>{
    
    if(e.keyCode >= 48 && e.keyCode <= 57){
        alert("You can not write digits!")
        inputTexto.value="";
    }

    else if(e.keyCode >= 96 && e.keyCode <= 105){
        alert("You can not write digits!")
        inputTexto.value="";
    }

    else if(e.keyCode == 13){
        saveNewWord()
        inputTexto.value="";
    }

})

// function checkWord(string) {
//     //Given a string, it checks if its the same one as the randomly guessed in the array of words

//     if(string == selectRandomWordIn(secretWordListAdded)){
//         alert("You guessed the word!")
//     }

//     else{
//         alert("You did not guess, keep trying!")
//     }

// }


/*Game page*/
function selectRandomWordIn(array){
    let word = array[Math.floor(Math.random() * array.length)]

    secretWord = word
}

const testLetterInput = document.querySelector(".testLetterInput");
var guessedLetters = [];
var notGuessedLetters = [];

testLetterInput.addEventListener("keyup", e=>{
    if(e.keyCode >= 48 && e.keyCode <= 57){
        alert("You can not write digits!")
        testLetterInput.value="";
    }

    else if(e.keyCode >= 96 && e.keyCode <= 105){
        alert("You can not write digits!")
        testLetterInput.value="";
    }

    else if(e.keyCode == 13){
        testLetter()
        testLetterInput.value="";
    }
    console.log(e);
})

function testLetter(){
    /*Letter verification*/
    if(secretWord.includes(testLetterInput.value)){
        alertAndAddLetter_ToArray_IfNew(testLetterInput.value, guessedLetters)
        testLetterInput.value="";
    }

    else {
        alertNotGuessed_In_IfNew(testLetterInput.value, notGuessedLetters)
        testLetterInput.value="";
    }
}

function alertAndAddLetter_ToArray_IfNew(letter, array){
    if(array.includes(letter)){
        alert("You already tried this letter and it belongs!")
    }

    else{
        alert("You guessed a letter!")
        add_ToArray_(letter, array)
    }
}

function alertNotGuessed_In_IfNew(letter, array){
    if(array.includes(letter)){
        alert("You already tried this letter and it does not belong!")
    }

    else{
        alert("That letter is not in the secret word!")
        add_ToArray_(letter, array)
    }
}

/*Dibujo*/
var tablero = document.getElementById("forca").getContext("2d"); //Pasamos los datos del canvas a JS

//Takes an array and picks a random element from it to return it:
// Array.prototype.sample = function(){
//     return this[Math.floor(Math.random()*this.length)];
// }
