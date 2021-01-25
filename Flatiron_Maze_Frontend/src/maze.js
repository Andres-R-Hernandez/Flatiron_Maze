const canvas = document.getElementById('canvas');

//5x5 (500px by 500px)
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

    //First Row
    a1.fillStyle = 'black';
    a1.fillRect(0, 0, 100, 100);

    b1.fillStyle = 'black';
    b1.fillRect(100, 0, 100, 100);

    c1.fillStyle = 'black';
    c1.fillRect(200, 0, 100, 100);

    d1.fillStyle = 'black';
    d1.fillRect(300, 0, 100, 100);

    e1.fillStyle = 'black';
    e1.fillRect(400, 0, 100, 100);

    // Second row
    a2.fillStyle = 'black';
    a2.fillRect(0, 100, 100, 100);

    b2.fillStyle = 'white';
    b2.fillRect(100, 100, 100, 100);

    c2.fillStyle = 'black';
    c2.fillRect(200, 100, 100, 100);

    d2.fillStyle = 'white';
    d2.fillRect(300, 100, 100, 100);

    e2.fillStyle = 'black';
    e2.fillRect(400, 100, 100, 100);

    // Third row
    a3.fillStyle = 'black';
    a3.fillRect(0, 200, 100, 100);

    b3.fillStyle = 'white';
    b3.fillRect(100, 200, 100, 100);

    c3.fillStyle = 'black';
    c3.fillRect(200, 200, 100, 100);

    d3.fillStyle = 'white';
    d3.fillRect(300, 200, 100, 100);

    e3.fillStyle = 'black';
    e3.fillRect(400, 200, 100, 100);

    // Fourth row
    a4.fillStyle = 'black';
    a4.fillRect(0, 300, 100, 100);

    b4.fillStyle = 'white';
    b4.fillRect(100, 300, 100, 100);

    c4.fillStyle = 'white';
    c4.fillRect(200, 300, 100, 100);

    d4.fillStyle = 'white';
    d4.fillRect(300, 300, 100, 100);

    e4.fillStyle = 'black';
    e4.fillRect(400, 300, 100, 100);

    //Fifth row 
    a5.fillStyle = 'black';
    a5.fillRect(0, 400, 100, 100);

    b5.fillStyle = 'black';
    b5.fillRect(100, 400, 100, 100);

    c5.fillStyle = 'black';
    c5.fillRect(200, 400, 100, 100);

    d5.fillStyle = 'white';
    d5.fillRect(300, 400, 100, 100);

    e5.fillStyle = 'black';
    e5.fillRect(400, 400, 100, 100);
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
                    initial.y += 100
                } else if (direction == "down") {
                    initial.y -= 100
                } else if (direction == "left") {
                    initial.x += 100
                } else if (direction == "right") {
                    initial.x -= 100
                }
            }
        }
    })
}

let initial = {
    x: 150,
    y: 150
}

let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(initial.x, initial.y, 25, 0, 2 * Math.PI);
ctx.stroke();    

function movePlayer() {
    ctx.beginPath();
    ctx.arc(initial.x, initial.y, 25, 0, 2 * Math.PI);
    ctx.stroke();    
}


document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        initial.y -= 100;
        let direction = "up"
        banCheck(direction)
        //here is where we remove existing circles
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        renderMaze()
        movePlayer()
    }
    else if (e.keyCode == '40') {
        // down arrow
        initial.y += 100;
        let direction = "down"
        banCheck(direction)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        renderMaze()
        movePlayer()
    }
    else if (e.keyCode == '37') {
       // left arrow
       initial.x -= 100;
       let direction = "left"
       banCheck(direction)
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       renderMaze()
       movePlayer()
    }
    else if (e.keyCode == '39') {
       // right arrow
       initial.x += 100;
       let direction = "right"
       banCheck(direction)
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       renderMaze()
       movePlayer()
    }
}
