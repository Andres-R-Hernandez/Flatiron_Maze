const canvas = document.getElementById('canvas');

//10x10 (500px by 500px)
function renderMaze() {
    const canvas = document.getElementById('canvas');

    const a1 = canvas.getContext('2d'); 
    const a2 = canvas.getContext('2d');
    const a3 = canvas.getContext('2d'); 
    const a4 = canvas.getContext('2d');
    const a5 = canvas.getContext('2d'); 
    const b1 = canvas.getContext('2d');
    const b2 = canvas.getContext('2d'); 
    const b3 = canvas.getContext('2d');
    const b4 = canvas.getContext('2d'); 
    const b5 = canvas.getContext('2d');
    const c1 = canvas.getContext('2d');
    const c2 = canvas.getContext('2d'); 
    const c3 = canvas.getContext('2d');
    const c4 = canvas.getContext('2d'); 
    const c5 = canvas.getContext('2d');
    const d1 = canvas.getContext('2d');
    const d2 = canvas.getContext('2d'); 
    const d3 = canvas.getContext('2d');
    const d4 = canvas.getContext('2d'); 
    const d5 = canvas.getContext('2d');
    const e1 = canvas.getContext('2d');
    const e2 = canvas.getContext('2d'); 
    const e3 = canvas.getContext('2d');
    const e4 = canvas.getContext('2d');
    const e5 = canvas.getContext('2d');

    const aa1 = canvas.getContext('2d'); 
    const aa2 = canvas.getContext('2d');
    const aa3 = canvas.getContext('2d'); 
    const aa4 = canvas.getContext('2d');
    const aa5 = canvas.getContext('2d'); 
    const bb1 = canvas.getContext('2d');
    const bb2 = canvas.getContext('2d'); 
    const bb3 = canvas.getContext('2d');
    const bb4 = canvas.getContext('2d'); 
    const bb5 = canvas.getContext('2d');
    const cc1 = canvas.getContext('2d');
    const cc2 = canvas.getContext('2d'); 
    const cc3 = canvas.getContext('2d');
    const cc4 = canvas.getContext('2d'); 
    const cc5 = canvas.getContext('2d');
    const dd1 = canvas.getContext('2d');
    const dd2 = canvas.getContext('2d'); 
    const dd3 = canvas.getContext('2d');
    const dd4 = canvas.getContext('2d'); 
    const dd5 = canvas.getContext('2d');
    const ee1 = canvas.getContext('2d');
    const ee2 = canvas.getContext('2d'); 
    const ee3 = canvas.getContext('2d');
    const ee4 = canvas.getContext('2d');
    const ee5 = canvas.getContext('2d');

    const a11 = canvas.getContext('2d'); 
    const a22 = canvas.getContext('2d');
    const a33 = canvas.getContext('2d'); 
    const a44 = canvas.getContext('2d');
    const a55 = canvas.getContext('2d'); 
    const b11 = canvas.getContext('2d');
    const b22 = canvas.getContext('2d'); 
    const b33 = canvas.getContext('2d');
    const b44 = canvas.getContext('2d'); 
    const b55 = canvas.getContext('2d');
    const c11 = canvas.getContext('2d');
    const c22 = canvas.getContext('2d'); 
    const c33 = canvas.getContext('2d');
    const c44 = canvas.getContext('2d'); 
    const c55 = canvas.getContext('2d');
    const d11 = canvas.getContext('2d');
    const d22 = canvas.getContext('2d'); 
    const d33 = canvas.getContext('2d');
    const d44 = canvas.getContext('2d'); 
    const d55 = canvas.getContext('2d');
    const e11 = canvas.getContext('2d');
    const e22 = canvas.getContext('2d'); 
    const e33 = canvas.getContext('2d');
    const e44 = canvas.getContext('2d');
    const e55 = canvas.getContext('2d');

    const aa11 = canvas.getContext('2d'); 
    const aa22 = canvas.getContext('2d');
    const aa33 = canvas.getContext('2d'); 
    const aa44 = canvas.getContext('2d');
    const aa55 = canvas.getContext('2d'); 
    const bb11 = canvas.getContext('2d');
    const bb22 = canvas.getContext('2d'); 
    const bb33 = canvas.getContext('2d');
    const bb44 = canvas.getContext('2d'); 
    const bb55 = canvas.getContext('2d');
    const cc11 = canvas.getContext('2d');
    const cc22 = canvas.getContext('2d'); 
    const cc33 = canvas.getContext('2d');
    const cc44 = canvas.getContext('2d'); 
    const cc55 = canvas.getContext('2d');
    const dd11 = canvas.getContext('2d');
    const dd22 = canvas.getContext('2d'); 
    const dd33 = canvas.getContext('2d');
    const dd44 = canvas.getContext('2d'); 
    const dd55 = canvas.getContext('2d');
    const ee11 = canvas.getContext('2d');
    const ee22 = canvas.getContext('2d'); 
    const ee33 = canvas.getContext('2d');
    const ee44 = canvas.getContext('2d');
    const ee55 = canvas.getContext('2d');


    //First Row
    a1.fillStyle = 'black';
    a1.fillRect(0, 0, 50, 50);

    b1.fillStyle = 'black';
    b1.fillRect(50, 0, 50, 50);

    c1.fillStyle = 'black';
    c1.fillRect(100, 0, 50, 50);

    d1.fillStyle = 'black';
    d1.fillRect(150, 0, 50, 50);

    e1.fillStyle = 'black';
    e1.fillRect(200, 0, 50, 50);
////
    aa1.fillStyle = 'black';
    aa1.fillRect(250, 0, 50, 50);

    bb1.fillStyle = 'black';
    bb1.fillRect(300, 0, 50, 50);

    cc1.fillStyle = 'black';
    cc1.fillRect(350, 0, 50, 50);

    dd1.fillStyle = 'black';
    dd1.fillRect(400, 0, 50, 50);

    ee1.fillStyle = 'black';
    ee1.fillRect(450, 0, 50, 50);

    // Second row
    a2.fillStyle = 'black';
    a2.fillRect(0, 50, 50, 50);

    b2.fillStyle = 'white';
    b2.fillRect(50, 50, 50, 50);

    c2.fillStyle = 'black';
    c2.fillRect(100, 50, 50, 50);

    d2.fillStyle = 'white';
    d2.fillRect(150, 50, 50, 50);

    e2.fillStyle = 'black';
    e2.fillRect(200, 50, 50, 50);
////
    aa2.fillStyle = 'black';
    aa2.fillRect(250, 50, 50, 50);

    bb2.fillStyle = 'white';
    bb2.fillRect(300, 50, 50, 50);

    cc2.fillStyle = 'black';
    cc2.fillRect(350, 50, 50, 50);

    dd2.fillStyle = 'white';
    dd2.fillRect(400, 50, 50, 50);

    ee2.fillStyle = 'black';
    ee2.fillRect(450, 50, 50, 50);

    // Third row
    a3.fillStyle = 'black';
    a3.fillRect(0, 100, 50, 50);

    b3.fillStyle = 'white';
    b3.fillRect(50, 100, 50, 50);

    c3.fillStyle = 'black';
    c3.fillRect(100, 100, 50, 50);

    d3.fillStyle = 'white';
    d3.fillRect(150, 100, 50, 50);

    e3.fillStyle = 'black';
    e3.fillRect(200, 100, 50, 50);
////
    aa3.fillStyle = 'black';
    aa3.fillRect(250, 100, 50, 50);

    bb3.fillStyle = 'white';
    bb3.fillRect(300, 100, 50, 50);

    cc3.fillStyle = 'black';
    cc3.fillRect(350, 100, 50, 50);

    dd3.fillStyle = 'white';
    dd3.fillRect(400, 100, 50, 50);

    ee3.fillStyle = 'black';
    ee3.fillRect(450, 100, 50, 50);

    // Fourth row
    a4.fillStyle = 'black';
    a4.fillRect(0, 150, 50, 50);

    b4.fillStyle = 'white';
    b4.fillRect(50, 150, 50, 50);

    c4.fillStyle = 'white';
    c4.fillRect(100, 150, 50, 50);

    d4.fillStyle = 'white';
    d4.fillRect(150, 150, 50, 50);

    e4.fillStyle = 'black';
    e4.fillRect(200, 150, 50, 50);
////
    aa4.fillStyle = 'black';
    aa4.fillRect(250, 150, 50, 50);

    bb4.fillStyle = 'white';
    bb4.fillRect(300, 150, 50, 50);

    cc4.fillStyle = 'black';
    cc4.fillRect(350, 150, 50, 50);

    dd4.fillStyle = 'white';
    dd4.fillRect(400, 150, 50, 50);

    ee4.fillStyle = 'black';
    ee4.fillRect(450, 150, 50, 50);

    //Fifth row 
    a5.fillStyle = 'black';
    a5.fillRect(0, 200, 50, 50);

    b5.fillStyle = 'white';
    b5.fillRect(50, 200, 50, 50);

    c5.fillStyle = 'black';
    c5.fillRect(100, 200, 50, 50);

    d5.fillStyle = 'white';
    d5.fillRect(150, 200, 50, 50);

    e5.fillStyle = 'white';
    e5.fillRect(200, 200, 50, 50);
////
    aa5.fillStyle = 'white';
    aa5.fillRect(250, 200, 50, 50);

    bb5.fillStyle = 'white';
    bb5.fillRect(300, 200, 50, 50);

    cc5.fillStyle = 'black';
    cc5.fillRect(350, 200, 50, 50);

    dd5.fillStyle = 'white';
    dd5.fillRect(400, 200, 50, 50);

    ee5.fillStyle = 'black';
    ee5.fillRect(450, 200, 50, 50);
    
    //Sixth Row
    a11.fillStyle = 'black';
    a11.fillRect(0, 250, 50, 50);

    b11.fillStyle = 'black';
    b11.fillRect(50, 250, 50, 50);

    c11.fillStyle = 'black';
    c11.fillRect(100, 250, 50, 50);

    d11.fillStyle = 'black';
    d11.fillRect(150, 250, 50, 50);

    e11.fillStyle = 'black';
    e11.fillRect(200, 250, 50, 50);
////
    aa11.fillStyle = 'black';
    aa11.fillRect(250, 250, 50, 50);

    bb11.fillStyle = 'white';
    bb11.fillRect(300, 250, 50, 50);

    cc11.fillStyle = 'black';
    cc11.fillRect(350, 250, 50, 50);

    dd11.fillStyle = 'black';
    dd11.fillRect(400, 250, 50, 50);

    ee11.fillStyle = 'black';
    ee11.fillRect(450, 250, 50, 50);

    //Seventh row
    a22.fillStyle = 'black';
    a22.fillRect(0, 300, 50, 50);

    b22.fillStyle = 'white';
    b22.fillRect(50, 300, 50, 50);

    c22.fillStyle = 'black';
    c22.fillRect(100, 300, 50, 50);

    d22.fillStyle = 'white';
    d22.fillRect(150, 300, 50, 50);

    e22.fillStyle = 'white';
    e22.fillRect(200, 300, 50, 50);
////
    aa22.fillStyle = 'white';
    aa22.fillRect(250, 300, 50, 50);

    bb22.fillStyle = 'white';
    bb22.fillRect(300, 300, 50, 50);

    cc22.fillStyle = 'black';
    cc22.fillRect(350, 300, 50, 50);

    dd22.fillStyle = 'white';
    dd22.fillRect(400, 300, 50, 50);

    ee22.fillStyle = 'white';
    ee22.fillRect(450, 300, 50, 50);

    //Eighth row
    a33.fillStyle = 'black';
    a33.fillRect(0, 350, 50, 50);

    b33.fillStyle = 'white';
    b33.fillRect(50, 350, 50, 50);

    c33.fillStyle = 'black';
    c33.fillRect(100, 350, 50, 50);

    d33.fillStyle = 'white';
    d33.fillRect(150, 350, 50, 50);

    e33.fillStyle = 'black';
    e33.fillRect(200, 350, 50, 50);
////
    aa33.fillStyle = 'black';
    aa33.fillRect(250, 350, 50, 50);

    bb33.fillStyle = 'black';
    bb33.fillRect(300, 350, 50, 50);

    cc33.fillStyle = 'black';
    cc33.fillRect(350, 350, 50, 50);

    dd33.fillStyle = 'white';
    dd33.fillRect(400, 350, 50, 50);

    ee33.fillStyle = 'black';
    ee33.fillRect(450, 350, 50, 50);

    //Ninth row
    a44.fillStyle = 'black';
    a44.fillRect(0, 400, 50, 50);

    b44.fillStyle = 'white';
    b44.fillRect(50, 400, 50, 50);

    c44.fillStyle = 'black';
    c44.fillRect(100, 400, 50, 50);

    d44.fillStyle = 'white';
    d44.fillRect(150, 400, 50, 50);

    e44.fillStyle = 'black';
    e44.fillRect(200, 400, 50, 50);
////
    aa44.fillStyle = 'black';
    aa44.fillRect(250, 400, 50, 50);

    bb44.fillStyle = 'white';
    bb44.fillRect(300, 400, 50, 50);

    cc44.fillStyle = 'black';
    cc44.fillRect(350, 400, 50, 50);

    dd44.fillStyle = 'white';
    dd44.fillRect(400, 400, 50, 50);

    ee44.fillStyle = 'black';
    ee44.fillRect(450, 400, 50, 50);

    //Tenth row 
    a55.fillStyle = 'black';
    a55.fillRect(0, 450, 50, 50);

    b55.fillStyle = 'white';
    b55.fillRect(50, 450, 50, 50);

    c55.fillStyle = 'black';
    c55.fillRect(100, 450, 50, 50);

    d55.fillStyle = 'white';
    d55.fillRect(150, 450, 50, 50);

    e55.fillStyle = 'black';
    e55.fillRect(200, 450, 50, 50);
////
    aa55.fillStyle = 'black';
    aa55.fillRect(250, 450, 50, 50);

    bb55.fillStyle = 'white';
    bb55.fillRect(300, 450, 50, 50);

    cc55.fillStyle = 'black';
    cc55.fillRect(350, 450, 50, 50);

    dd55.fillStyle = 'white';
    dd55.fillRect(400, 450, 50, 50);

    ee55.fillStyle = 'black';
    ee55.fillRect(450, 450, 50, 50);
}

renderMaze()


let bannedCoordinates = [
    {
        x: 50,
        y: 50
    },
    {
        x: 150,
        y: 50
    },
    {
        x: 250,
        y: 50
    },
    {
        x: 350,
        y: 50
    },
    {
        x: 450,
        y: 50
    },
    {
        x: 50,
        y: 150
    },
    {
        x: 50,
        y: 250
    },
    {
        x: 50,
        y: 350
    },
    {
        x: 50,
        y: 450
    },
    {
        x: 150,
        y: 450
    },
    {
        x: 250,
        y: 450
    },
    {
        x: 250,
        y: 150
    },
    {
        x: 250,
        y: 250
    },
    {
        x: 450,
        y: 150
    },
    {
        x: 450,
        y: 250
    },
    {
        x: 450,
        y: 350
    },
    {
        x: 450,
        y: 450
    },
]

function banCheck(direction) {
    bannedCoordinates.forEach((cord) => {
        if (cord.x == initial.x) {
            if (cord.y == initial.y) {
                console.log("BANNED")
                if (direction == "up") {
                    initial.y += 50
                } else if (direction == "down") {
                    initial.y -= 50
                } else if (direction == "left") {
                    initial.x += 50
                } else if (direction == "right") {
                    initial.x -= 50
                }
            }
        }
    })
}

let initial = {
    x: 75,
    y: 75
}

let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(initial.x, initial.y, 12, 0, 2 * Math.PI);
ctx.stroke();    

function movePlayer() {
    ctx.beginPath();
    ctx.arc(initial.x, initial.y, 12, 0, 2 * Math.PI);
    ctx.stroke();    
}


document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        initial.y -= 50;
        let direction = "up"
        banCheck(direction)
        //here is where we remove existing circles
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        renderMaze()
        movePlayer()
    }
    else if (e.keyCode == '40') {
        // down arrow
        initial.y += 50;
        let direction = "down"
        banCheck(direction)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        renderMaze()
        movePlayer()
    }
    else if (e.keyCode == '37') {
       // left arrow
       initial.x -= 50;
       let direction = "left"
       banCheck(direction)
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       renderMaze()
       movePlayer()
    }
    else if (e.keyCode == '39') {
       // right arrow
       initial.x += 50;
       let direction = "right"
       banCheck(direction)
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       renderMaze()
       movePlayer()
    }
}
