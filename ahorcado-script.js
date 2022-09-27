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
    testLetterInput.focus();

    addWordPage.style.display = "none";
    homePage.style.display = "none";

    //Game:
    selectRandomWordIn(secretWordListAdded)
    //drawInvisibleWord() Writes the secret word in display:"none";
    dibujarCanvas()
    drawLinesForWord()

    //Verify letter
    // document.onkeydown = (e) => {
    //     var letra = e.key.toUpperCase()
    //     testLetterK(letra)
    // }
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

var secretWordListAdded = ["retro", "computer", "language", "search", "practice"];
var secretWord = "";

//Show list in console for verification:

function saveNewWord(){
    //This button saves the word written and adds it to the secretWordListAdded array. Otherwise it displays an alert.
    if(inputTexto.value==""){
        alert("Write a word to be used in the game!");
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
    
    if(e.keyCode == 13){
        saveNewWord()
        inputTexto.value="";
    }

    else if( !(isLetter(e.keyCode)) && !(isWritingSymbol(e.keyCode))){
        alert("You can not write digits or uppercase letters!")
        inputTexto.value="";
    }

})

function isLetter(key){
    return(key >= 65 && key <= 90) 
}

function isWritingSymbol(key){
            //Erase     //Shift     //Ctrl      //Ctrl+Shift     //f12
    return(key == 8 || key == 16 || key == 17 || key == 37 || key == 123) 
}


/*Game page*/
function selectRandomWordIn(array){
    let word = array[Math.floor(Math.random() * array.length)]

    secretWord = word
}

const testLetterInput = document.querySelector(".testLetterInput");
var guessedLetters = [];
var notGuessedLetters = [];

var errorsLeft = 8;
var guessedLettersCount = 0;

testLetterInput.addEventListener("keyup", e=>{
    if(e.keyCode == 13){
        testLetter()
        testLetterInput.value="";
    }
    else if( !(isLetter(e.keyCode)) && !(isWritingSymbol(e.keyCode))){
        alert("You can not write digits or uppercase letters!")
        testLetterInput.value="";
    }

})

//Test letter
function testLetter(){

    if(errorsLeft == 0 || guessedLettersCount==secretWord.length){
        alert("The game is over!")
        testLetterInput.value="";
    }
    
    /*Letter verification*/
    else if(secretWord.includes(testLetterInput.value)){
        alertAndAddLetter_ToArray_IfNew(testLetterInput.value, guessedLetters)
        
        testLetterInput.value="";
    }

    else {
        alertNotGuessed_In_IfNew(testLetterInput.value, notGuessedLetters) 

        testLetterInput.value="";
    }

}

youWonText = document.querySelector(".youWon")
youLostText = document.querySelector(".youLost")

function alertAndAddLetter_ToArray_IfNew(letter, array){
    if(array.includes(letter)){
        alert("You already tried this letter and it belongs!")
    }

    else{
        //Add to array of guessed letters
        add_ToArray_(letter, array)

        //write correct word
        verifyIfWonWith_In_OrWriteIt(letter)
    }
}

function verifyIfWonWith_In_OrWriteIt(letter){
    
    //Adds last word
    for(var i = 0; i < secretWord.length; i++){
        if(secretWord[i] == letter){
            writeCorrectLetter(i)
            guessedLettersCount = guessedLettersCount + 1
        }
    }
    if(guessedLettersCount==secretWord.length){
        youWonText.style.display = "inline-block";
    }
}

function alertNotGuessed_In_IfNew(letter, array){
    if(array.includes(letter)){
        alert("You already tried this letter and it does not belong!")
    }
    
    else{
        //Update errors and write incorrect word
        errorsLeft = errorsLeft - 1
        writeIncorrectLetter(letter, errorsLeft)

        //Draw hangman part
        drawHangmanWith_Errors(errorsLeft)
        
        //Add to array of not guessed letters
        add_ToArray_(letter, array)
        
    }
}

function drawHangmanWith_Errors(errors) {
    
    if(errors == 7){
        drawHanger()
    }

    if(errors == 6){
        drawHead()
    }

    if(errors == 5){
        drawBody()
    }

    if(errors == 4){
        drawLeftLeg()
    }

    if(errors == 3){
        drawRightLeg()
    }

    if(errors == 2){
        drawLeftArm()
    }

    if(errors == 1){
        drawRightArm()
    }
    
    if(errors==0){
        drawArrow()
        youLostText.style.display = "inline-block";

        writeCompleteCorrectWord();
    }
    
}

function writeCompleteCorrectWord() {
    for(var i = 0; i < secretWord.length; i++){
        if(lettersWritten.includes(secretWord[i])){
            writeCorrectLetter(i)
        }
        else{
            writeCorrectLetterLeft(i)
        }
    }
}

/*Dibujo*/
var tablero = document.getElementById("forca").getContext("2d"); //Pasamos los datos del canvas a JS