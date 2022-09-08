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
}

/*Go add word page button*/
function goAddWordPage(){
    addWordPage.style.display = "block";

    gamePage.style.display = "none";
    homePage.style.display = "none";
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
}


/*Save word button*/

//original list: var secretWordListAdded = ["retro", "computer", "language", "search", "practice"];

//practice list:
var secretWordListAdded = ["retro", "computer"];

//Show list in console for verification:
console.log(secretWordListAdded)

function saveNewWord(){
    //This button saves the word written and adds it to the secretWordListAdded array. Otherwise it displays an alert.
    if(inputTexto.value==""){
        alert("Write a word to be used in the game!")
    }

    else {
        secretWordListAdded = add_ToArray_(inputTexto.value, secretWordListAdded)
        inputTexto.value="";
    }
}

function add_ToArray_(string, array){
    //adds the string given to the array given and returns the final array.
    array.push([string])

    return(array)
}

/*Secret word list*/
    //Takes an array and picks a random element from it to return it.
Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}



/*Game page*/
const keyboardInput = document.querySelector(".testGameInput")

keyboardInput.addEventListener("keyup", e=>{
    if(e.keyCode == 13){
        checkWord(keyboardInput.value)
        keyboardInput.value="";
    }
})

function checkWord(string) {
    //Given a string, it checks if its the same one as the randomly guessed in the array of words

    if(string == secretWordListAdded.sample()){
        alert("You guessed the word!")
    }

    else{
        alert("You did not guess, keep trying!")
    }

}

/*Dibujo*/
var pantalla = document.querySelector("canvas"); //Pasamos los datos del canvas a JS
var pincel = pantalla.getContext("2d");

    // pincel.fillStyle = "darkblue"; 
    // pincel.fillRect(500,500,200,400);
;