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
        console.log("clicked")
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

function renderCreatePlayerForm() {
    let loginContainer = document.querySelector("#login-form-container");
    loginContainer.innerHTML = ""
    loginContainer.innerHTML = 
    `<form id="login-form" class="m-3">
        <p class="text-light">Create Your Player!</p>
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
        createNewPlayer(event.target.userName.value)
    })
}

function createNewPlayer(name) {
    newPlayer = {
        name: name,
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
        if (!!data) {
            currentUser = data
            renderHomescreen(currentUser)
        }
    })
    .catch(function(error) {
        alert("UH OH! Looks like that Username is already taken!! Choose another.");
        console.log(error.message);
      });
}