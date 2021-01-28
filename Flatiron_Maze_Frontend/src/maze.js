//global variable for number of rows in a game, becuse i cant remove the movement eventlistener otherwise.
let numRows
let array = []

async function fetchMazes() {
    // let mazes = []
    // fetch(`http://localhost:3000/mazes/${difficulty}`)
    // .then(resp => resp.json())
    // .then(data => data.forEach(element => mazes.push(element)))
    // return mazes

    // asynchronous code used to avoid conflicts in playMaze
    let mazes = []
    let response = await fetch(`http://localhost:3000/mazes`)
    let data = await response.json()
    listOmazes = data
}

async function fetchMazeLayout(mazeID) {
    // let mazes = []
    // fetch(`http://localhost:3000/mazes/${difficulty}`)
    // .then(resp => resp.json())
    // .then(data => data.forEach(element => mazes.push(element)))
    // return mazes

    // asynchronous code used to avoid conflicts in playMaze
    let response = await fetch(`http://localhost:3000/mazes/${mazeID}`)
    let data = await response.json()
    return arrayParse(data.layout)
}

function arrayParse(arrayString) {
    array = []
    let row = []

    for (i=0;i<arrayString.length;i++) {
        if (arrayString.charAt(i) == "]") {
            if (row.length > 0) {
                array.push(row)
                row = []
            }    
        } else {
            if (arrayString.charAt(i) == "0" || arrayString.charAt(i) == "1") {
                let integer = parseInt(arrayString.charAt(i), 10)
                row.push(integer)
            }
        }
    }
    numRows = array.length
    return array
}

function playMaze(array) {
    const cellSize = 500/numRows

    playerPosition = {
        x: cellSize/2,
        y: cellSize/2
    }

    let canvasContainer = document.querySelector("#canvas-container")
    canvasContainer.style.display = "block"
    let canvas = document.createElement('canvas');
        canvas.id = "canvas"
        canvas.width = "500"
        canvas.height = "500"
        canvas.style.display = "table"
    let timer = document.createElement('h3');
        timer.id = "counter"
        timer.innerText = 0
    canvasContainer.append(canvas)
    canvasContainer.append(timer)

    renderMaze(array)

    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(playerPosition.x, playerPosition.y, 5, 0, 2 * Math.PI);
    ctx.stroke();

    interval = setInterval(() => {
        document.querySelector('#counter').innerText++
    }, 1000);

    document.addEventListener('keydown', checkKey)
}

function renderMaze(array) {
    let cells = []
    const numRows = array.length
    const cellSize = 500/numRows
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let number = 1
    let yPos = 0
    for (row of array) {
        let alpha = 0
        let xPos = 0
        for (element of row) {
            let cellID = alphabet[alpha]+number
            cells.push(cellID)
            let context = canvas.getContext('2d');
            if (array[number-1][alpha] == 0) {
                context.fillStyle = 'white';
                context.fillRect(xPos, yPos, cellSize, cellSize);          
            } else {
                context.fillStyle = 'black';
                context.fillRect(xPos, yPos, cellSize, cellSize);             
            }
            alpha++
            xPos += cellSize
        }
        number++
        yPos += cellSize
    }
    //code below colors the endgame square blue
    let endSquare = canvas.getContext('2d');
    endSquare.fillStyle = 'blue';
    endSquare.fillRect(500-cellSize, 500-cellSize, cellSize, cellSize); 
}

function wallCheck(array, direction) {
    const numRows = array.length
    const cellSize = 500/numRows

    let x = (playerPosition.x-(cellSize/2))/cellSize
    let y = (playerPosition.y-(cellSize/2))/cellSize

    if (x < 0 || y < 0) {
        if (direction == "up") {
            playerPosition.y += cellSize
        } else if (direction == "down") {
            playerPosition.y -= cellSize
        } else if (direction == "left") {
            playerPosition.x += cellSize
        } else if (direction == "right") {
            playerPosition.x -= cellSize
        }
    } else if (x > numRows-1 || y > numRows-1) {
        if (direction == "up") {
            playerPosition.y += cellSize
        } else if (direction == "down") {
            playerPosition.y -= cellSize
        } else if (direction == "left") {
            playerPosition.x += cellSize
        } else if (direction == "right") {
            playerPosition.x -= cellSize
        }
    } else if (array[y][x] == 1){
        if (direction == "up") {
            playerPosition.y += cellSize
        } else if (direction == "down") {
            playerPosition.y -= cellSize
        } else if (direction == "left") {
            playerPosition.x += cellSize
        } else if (direction == "right") {
            playerPosition.x -= cellSize
        }
    }
}

function movePlayer() {
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(playerPosition.x, playerPosition.y, 5, 0, 2 * Math.PI);
    ctx.stroke(); 
}

function checkKey(e) {
    e = e || window.event;
    const numRows = array.length
    const cellSize = 500/numRows
    let ctx = canvas.getContext('2d');

    if (e.keyCode == '38') {
        // up arrow
        playerPosition.y -= cellSize;
        let direction = "up"
        //check for walls
        wallCheck(array, direction)
        //here is where we remove existing circles
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        renderMaze(array)
        movePlayer()
        checkVictory(array)
    }
    else if (e.keyCode == '40') {
        // down arrow
        playerPosition.y += cellSize;
        let direction = "down"
        wallCheck(array, direction)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        renderMaze(array)
        movePlayer()
        checkVictory(array)
    }
    else if (e.keyCode == '37') {
       // left arrow
       playerPosition.x -= cellSize;
       let direction = "left"
       wallCheck(array, direction)
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       renderMaze(array)
       movePlayer()
       checkVictory(array)
    }
    else if (e.keyCode == '39') {
       // right arrow
       playerPosition.x += cellSize;
       let direction = "right"
       wallCheck(array, direction)
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       renderMaze(array)
       movePlayer()
       checkVictory(array)
    }
}

function checkVictory(array) {
    const cellSize = 500/numRows
    if (playerPosition.x == 500-cellSize/2 && playerPosition.y == 500-cellSize/2) {
        console.log("VICTORY")
        victory()
    }
}

function victory() {
    //this is where we can do some firework animations for the win
    //stop counter
    //save timescore to the database
    //send player to the leaderboard (for the maze they just completed)
    //allow player to write a comment about the maze they just played (render a comment form)
    clearInterval(interval)
    saveScore()
    document.removeEventListener('keydown', checkKey)
    window.setTimeout( () => {
        clearScreen()
        renderLeaderboard(currentMaze)
        addCommentAfterWin()
    }, 4000)
}

function saveScore() {
    let counter = parseInt(document.querySelector("#counter").innerText,10)
    newScore = {
        score: counter,
        player_id: currentUser.id,
        maze_id: currentMaze,    
    }
    reqPkg = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newScore)
    }
    fetch("http://localhost:3000/timescores/new", reqPkg)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
    .catch(function(error) {
        alert("UH OH! Something bad happened. Your score was not saved");
        console.log(error.message);
      });
}
