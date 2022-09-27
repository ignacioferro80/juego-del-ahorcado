function dibujarCanvas(){

    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();

}

function drawLinesForWord(){

    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    var anchura = 600/secretWord.length
    for(var i = 0; i < secretWord.length; i++){

        tablero.moveTo(500 + (anchura*i),640) //Agregamos i para que haga tantas lineas como letras.
        tablero.lineTo(550 + (anchura*i),640) //Agregamos i para que haga tantas lineas como letras.

    }

    tablero.stroke();
    tablero.closePath();

}

//We create a variable so that we can se which letters we already guessed
var lettersWritten = [];

function writeCorrectLetter(index){
    tablero.font = "bold 52px Montserrat";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#1a3250";

    var anchura = 600/secretWord.length
    tablero.fillText(secretWord[index], 505+(anchura*index), 620) //Posiciona la letra correcta en las lineas
    tablero.stroke()

    lettersWritten = add_ToArray_(secretWord[index], lettersWritten) //We save the ones that were correct.
}

function writeCorrectLetterLeft(index){
    tablero.font = "bold 52px Montserrat";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "rgb(167 88 88)";

    var anchura = 600/secretWord.length
    tablero.fillText(secretWord[index], 505+(anchura*index), 620) //Posiciona la letra correcta en las lineas
    tablero.stroke()
}

function writeIncorrectLetter(letra, errorsLeft){
    tablero.font = "bold 40px Montserrat";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#1a3250";
    tablero.fillText(letra, 535+(40*(10-errorsLeft)), 710, 40)

    var anchura = 600/secretWord.length
    tablero.fillText(secretWord[letra], 505+(anchura*letra), 620)//Posiciona la letra incorrecta en las lineas
    tablero.stroke()
}

/* Draw hangman with errors */
function drawHanger() {

    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(700,500);
    tablero.lineTo(700,250);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(700,250);
    tablero.lineTo(790,250);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(790,250);
    tablero.lineTo(790,280);
    tablero.stroke();
    tablero.closePath();

}

function drawHead(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.moveTo(790,300);
    tablero.arc(790,300,30,0,2*Math.PI);
    tablero.fill();
    tablero.closePath();
}

function drawBody() {

    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(790,330);
    tablero.lineTo(790,390);
    tablero.stroke();
    tablero.closePath();

}

function drawLeftLeg(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(790,390);
    tablero.lineTo(770,430);
    tablero.stroke();
    tablero.closePath();

}

function drawRightLeg(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(790,390);
    tablero.lineTo(810,430);
    tablero.stroke();
    tablero.closePath();
}

function drawLeftArm(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(790,330);
    tablero.lineTo(770,370);
    tablero.stroke();
    tablero.closePath();
}

function drawRightArm(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(790,330);
    tablero.lineTo(810,370);
    tablero.stroke();
    tablero.closePath();
}

function drawArrow(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#1a3250";

    tablero.beginPath();
    tablero.moveTo(750,330);
    tablero.lineTo(860,330);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(860,330);
    tablero.lineTo(840,320);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(860,330);
    tablero.lineTo(840,340);
    tablero.stroke();
    tablero.closePath();
}