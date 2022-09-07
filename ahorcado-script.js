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

/*Clean input button*/
const inputTexto = document.querySelector(".encryptInput");
const cleanButton = document.querySelector(".cleanButton");

function cleanInput() {
    inputTexto.value="";
}

/*Random list button*/
function randomWordTest(){
    alert(secretWordListAdded.sample());
}

/*Save word button*/
function saveNewWord(){
    if(inputTexto.value==""){
        alert("Write a word to be used in the game!")
    }

    else {
        add_ToArray_(inputTexto.value, secretWordListAdded)
        inputTexto.value="";
    }
}

function add_ToArray_(string, array){
    array.push([string])
}

/*Secret word list*/
Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const secretWordListDefault = ["retro", "computer", "language", "search", "practice"];
const secretWordListAdded = ["retro", "computer"];



/*Game page*/

/*Dibujo*/
var pantalla = document.querySelector("canvas"); //Pasamos los datos del canvas a JS
var pincel = pantalla.getContext("2d");

    // pincel.fillStyle = "darkblue"; 
    // pincel.fillRect(500,500,200,400);
;