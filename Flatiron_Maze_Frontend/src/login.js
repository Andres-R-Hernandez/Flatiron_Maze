const renderImg = (Img) => {
    document.querySelector('#Img-container').innerHTML += `<div class="card m-2"></div>`}

// Redirect to homepage taskbar
// Connect 'Play Game', 'Leaderboard', 'Logout'

function renderLogin() {
    let loginContainer = document.querySelector("#login-form-container");
    loginContainer.style.display = "block"
    loginContainer.innerHTML = 
    `<form id="login-form" class="m-3">
        <p class="text-light">Login</p>
        <div class="row">
            <div class="col-sm">
                <input id="namevalue" name="userName" type="text" class="form-control" placeholder="Enter a Name">
            </div>
        </div>
        <input class="btn btn-primary mt-2" id="submit" type="submit">
    </form>`;
    let loginForm = document.querySelector("#login-form");
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault()
        login(event.target.userName.value)
    })
    
    //add create a player button
    let newPlayerBtn = document.createElement('button')
    newPlayerBtn.innerText = "Create A PLayer"
    newPlayerBtn.classList.add("btn")
    newPlayerBtn.classList.add("btn-primary")
    newPlayerBtn.classList.add("mt-2")
    newPlayerBtn.addEventListener('click', () => {
        renderCreatePlayerForm()
    })
    loginContainer.append(newPlayerBtn)
}

function login(userName) {
    if (!userName) {
        alert("UH OH! Only those with a name can play.");
    } else {
        fetch(`http://localhost:3000/players/${userName}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            if (!!data) {
                currentUser = data
                renderHomescreen(currentUser)
            }
        })
        .catch(function(error) {
            alert("UH OH! Looks like that Username does not exist. Please check you spelling, or choose 'Create A Player'");
            console.log(error.message);
        });
    }
}

async function renderCreatePlayerForm() {
    let loginContainer = document.querySelector("#login-form-container");
    loginContainer.innerHTML = ""
    loginContainer.innerHTML = 
    `<form id="login-form" class="m-3">
        <p class="text-light">Create Your Player Name And Choose A Sprite From The Selection Below!</p>
        <div class="row">
            <div class="col-sm">
                <input id="namevalue" name="userName" type="text" class="form-control" placeholder="Enter a Name">
            </div>
            <select id="sprite" name="sprite">
                <option value="1">Player Sprite #1</option>
                <option value="2">Player Sprite #2</option>
                <option value="3">Player Sprite #3</option>
                <option value="4">Player Sprite #4</option>
                <option value="5">Player Sprite #5</option>
                <option value="6">Player Sprite #6</option>
            </select> 
        </div>
        <input class="btn btn-primary mt-2" id="submit" type="submit">
    </form>`;
    let loginForm = document.querySelector("#login-form");
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault()
        if (!event.target.userName.value) {
            alert("UH OH! Only those with a name can play.");
        } else {
            createNewPlayer(event)
        }
        
    })

    let sprites = await fetchSprites()

    sprites.forEach((sprite, index) => {
        let img = document.createElement('img')
        img.src = sprite.image_url
        img.style.height = `50px`
        img.style.width = `50px`
        img.title = `Player Sprite #${index+1}`
        loginContainer.append(img)
    });

}

async function fetchSprites() {
    return fetch("http://localhost:3000/sprites")
    .then(resp => resp.json())
}

function createNewPlayer(event) {
    newPlayer = {
        name: event.target.userName.value,
        spriteId: parseInt(event.target.sprite.value,10)
    }

    reqPkg = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(newPlayer)
    }

    fetch("http://localhost:3000/players/new", reqPkg)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        console.log("why")
        if (!!data) {
            currentUser = data
            renderHomescreen(currentUser)
        }
    })
    .catch(function(error) {
        alert("UH OH! Looks like that Username is already taken!! Choose another.");
        console.log(error.message);
        console.log("lame")
      });
}

function welcome() {
    const container = document.querySelector("#login-form-container")
    container.style.display = "block"
    let h3 = document.createElement("h3")
    h3.innerText = "Welcome to Flatiron Maze"
    let p = document.createElement("p")
    p.innerText = "How to play: You are curently at the Homescreen, and you have four options to choose from (Play Game, Leaderboard, Comments, Logout).\n\nSelecting 'Play Game' will take you to an options screen where you can select which maze to play.\n\nSelecting 'Leaderboard' you can look at the current score leaders for each maze.\n\nSelecting 'Comments' will take you to the comment board, that past players have written.\n\nSelecting 'Logout' will take you back to the Login page." 
    container.append(h3, p)
}