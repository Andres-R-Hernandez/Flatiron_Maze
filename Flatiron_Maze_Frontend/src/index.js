let currentUser = {}

document.addEventListener("DOMContentLoaded", () => {
  renderLogin()
})

function renderHomescreen(currentUser) {
  let loginContainer = document.querySelector("#form-container");
  loginContainer.innerHTML = ""

  let navbar = document.querySelector("#loggedInOptions");
  navbar.style.visibility = "visible"

  buttonEvents()
}

function buttonEvents() {
  //grab button from document
  //add event listener
  //within eventlistener, add callback function to ex: playGame()
  let playgame = document.querySelector("#imgBtn")
  playgame.addEventListener('click', () => {
    playGame()
  });
  let leaderboard = document.querySelector("#imgBtn1")
  playgame.addEventListener('click', () => {
    Leaderboard()
  });
  let comments = document.querySelector("#imgBtn2")
  playgame.addEventListener('click', () => {
    Comments()
  });
  let logout = document.querySelector("#imgBtn3")
  playgame.addEventListener('click', () => {
    Logout()
  });
}


function playGame() {
  //grab container
  //render difficulty options
  //fetch mazes from DB
  //display options in a dropdown (or render mini mazes????)
  //initiate game with options

  let gameContainer = querySelector("#form-container")
  let gameOptionsForm = document.createElement('form')

}

function Leaderboard() {
  
}

function Comments() {
  
}

function Logout() {
  
}