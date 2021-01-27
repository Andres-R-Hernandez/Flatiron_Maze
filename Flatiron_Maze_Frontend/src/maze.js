async function fetchMazes(difficulty) {
    // let mazes = []
    // fetch(`http://localhost:3000/mazes/${difficulty}`)
    // .then(resp => resp.json())
    // .then(data => data.forEach(element => mazes.push(element)))
    // return mazes

    //asynchronous code (not used)
    let mazes = []
    let response = await fetch(`http://localhost:3000/mazes/${difficulty}`)
    let data = await response.json()
    data.forEach(element => mazes.push(element))
    return mazes
}

function arrayParse(arrayString) {
    let array = []
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
    return array
}

function playMaze(array) {
    const numRows = array.length
    const cellSize = 500/numRows

    let playerPosition = {
        x: cellSize/2,
        y: cellSize/2
    }

    let canvasContainer = document.querySelector("#canvas-container")
    canvasContainer.style.display = "block"
    let canvas = document.createElement('canvas');
        canvas.id = "canvas"
        canvas.width = "500"
        canvas.height = "500"
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



    document.addEventListener('keydown', (e) => {
        checkKey(e, playerPosition, array)
        //checkVictory(playerPosition)
        //check if complete (true/false)
    })
}

function complete(playerPosition, array) {
    const numRows = array.length
    return (playerPosition.x != numRows && playerPosition.y != numRows)
    // returns false when the player reaches the 'exit'
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
}

function wallCheck(array, playerPosition, direction) {
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

function movePlayer(playerPosition) {
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(playerPosition.x, playerPosition.y, 5, 0, 2 * Math.PI);
    ctx.stroke(); 
}

function checkKey(e, playerPosition, array) {
    e = e || window.event;
    const numRows = array.length
    const cellSize = 500/numRows
    let ctx = canvas.getContext('2d');

    if (e.keyCode == '38') {
        // up arrow
        playerPosition.y -= cellSize;
        let direction = "up"
        //check for walls
        wallCheck(array, playerPosition, direction)
        //here is where we remove existing circles
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        renderMaze(array)
        movePlayer(playerPosition)
    }
    else if (e.keyCode == '40') {
        // down arrow
        playerPosition.y += cellSize;
        let direction = "down"
        wallCheck(array, playerPosition, direction)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        renderMaze(array)
        movePlayer(playerPosition)
    }
    else if (e.keyCode == '37') {
       // left arrow
       playerPosition.x -= cellSize;
       let direction = "left"
       wallCheck(array, playerPosition, direction)
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       renderMaze(array)
       movePlayer(playerPosition)
    }
    else if (e.keyCode == '39') {
       // right arrow
       playerPosition.x += cellSize;
       let direction = "right"
       wallCheck(array, playerPosition, direction)
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       renderMaze(array)
       movePlayer(playerPosition)
    }
}
