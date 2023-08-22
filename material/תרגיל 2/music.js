function drawLine(z) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    var x = 0, y = z;
    context.moveTo(x, y);
    var x = 1000, y = z;
    context.lineTo(x, y);
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();
}

function drawNote(z, w, id) {
    if (!(id1 == null)) {
        document.getElementById(id1).pause();
    }
    document.getElementById(id).play();

    newNote();
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    var x = 500, y = z;
    context.moveTo(x, y);
    var x = 500, y = w;
    context.lineTo(x, y);
    context.strokeStyle = "black";
    context.lineWidth = 10;
    context.lineCap = "round";
    context.stroke();
    if (z < w) {
        drawCircle(475, w - 20);
    }
    else {
        drawCircle(525, w + 20);
    }

    var id1 = id;
}

function drawCircle(a, b) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = "black";
    var x = a, y = b, r = 25;
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
}

function newNote() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = "white";
    var x = 0, y = 0, width = 1000, height = 250;
    context.fillRect(x, y, width, height);
    context.closePath();
    drawLine(25);
    drawLine(75);
    drawLine(125);
    drawLine(175);
    drawLine(225);
}



drawLine(25);
drawLine(75);
drawLine(125);
drawLine(175);
drawLine(225);

