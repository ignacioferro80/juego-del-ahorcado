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

/*Clena input*/
const inputTexto = document.querySelector(".encryptInput");
const cleanButton = document.querySelector(".cleanButton");

function cleanInput() {
    inputTexto.value="";
}