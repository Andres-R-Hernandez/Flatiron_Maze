function fetchMazes(difficulty) {
    let mazes = []
    fetch(`http://localhost:3000/mazes/${difficulty}`)
    .then(resp => resp.json())
    .then(data => data.forEach(element => mazes.push(element)))
    return mazes
}

function arrayParse(arrayString, size) {
    let array = []
}

function playMaze(array) {
    const numRows = array.length
    const cellSize = 500/numRows

    let playerPosition = {
        x: cellSize/2,
        y: cellSize/2
    }

    renderMaze(array)

    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(playerPosition.x, playerPosition.y, 5, 0, 2 * Math.PI);
    ctx.stroke();
    
    document.onkeydown = checkKey;

}

function renderMaze(array) {
    const canvas = document.getElementById('canvas');
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
        console.log("BANNED")
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
        console.log("BANNED")
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
        console.log("BANNED")
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
    ctx.beginPath();
    ctx.arc(playerPosition.x, playerPosition.y, 5, 0, 2 * Math.PI);
    ctx.stroke(); 
}

function checkKey(e, playerPosition) {

    e = e || window.event;
    const numRows = array.length
    const cellSize = 500/numRows

    if (e.keyCode == '38') {
        // up arrow
        playerPosition.y -= cellSize;
        let direction = "up"
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
