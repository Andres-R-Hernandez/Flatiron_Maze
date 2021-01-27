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
}

function login(userName) {
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
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });
}
