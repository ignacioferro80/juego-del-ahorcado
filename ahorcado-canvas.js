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