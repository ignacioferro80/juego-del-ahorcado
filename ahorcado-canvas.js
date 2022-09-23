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

function writeCorrectWord(index){
    tablero.font = "bold 52px Montserrat";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#1a3250";

    var anchura = 600/secretWord.length
    tablero.fillText(secretWord[index], 505+(anchura*index), 620) //Posiciona la letra correcta en las lineas
    tablero.stroke()
}

function writeIncorrectWord(letra, errorsLeft){
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