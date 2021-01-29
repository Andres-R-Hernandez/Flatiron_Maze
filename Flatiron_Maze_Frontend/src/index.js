//Global varaible for current logged in user
let currentUser = {}
//Global variable for game counter. needs to be global for reset outside of playMaze function
let interval
//Global variable for the current maze
let currentMaze
//Global variable for player position during game
let playerPosition
//Global variable for list of mazes, with difficulties, for options
let listOmazes = []

document.addEventListener("DOMContentLoaded", () => {
  buttonEvents()
  renderLogin()
  fetchMazes()
})

function buttonEvents() {
  let playgameBtn = document.querySelector("#imgBtn1")
  playgameBtn.addEventListener('click', () => {
    clearScreen()
    selectDifficulty()
  });
  let leaderboardBtn = document.querySelector("#imgBtn2")
  leaderboardBtn.addEventListener('click', () => {
    clearScreen()
    leaderboard()
  });
  let commentsBtn = document.querySelector("#imgBtn3")
  commentsBtn.addEventListener('click', () => {
    clearScreen()
    comments()
  });
  let logoutBtn = document.querySelector("#imgBtn4")
  logoutBtn.addEventListener('click', () => {
    clearScreen()
    logout()
  });
}

function renderHomescreen(currentUser) {
  clearScreen()

  let navbar = document.querySelector("#loggedInOptions");
  navbar.style.visibility = "visible"

  let title = document.querySelector("#title")
  title.addEventListener('click', welcome)

  welcome() 
}

async function selectDifficulty() {
  let gameOptionsContainer = document.querySelector("#options-form-container")
  gameOptionsContainer.style.display = "block"

  let gameOptionsForm = document.createElement('form')
  let label = document.createElement('label')
  label.for = "mazeOptions"
  label.innerText = "Choose a Maze:"
  let selectMenu = document.createElement('select')
  selectMenu.name = "mazeChoice"
  selectMenu.id = "mazeOptions"
  let button = document.createElement('input')
  button.type = "submit"
  button.value = "submit"

  listOmazes.forEach((mazeOption) => {
      let option = document.createElement('option')
      option.value = mazeOption.id
      option.innerText = `Maze #${mazeOption.id}, ${mazeOption.difficulty}`
      selectMenu.append(option)
  })

  gameOptionsForm.addEventListener('submit', async (event) => {
      event.preventDefault()
      clearScreen()
      currentMaze = await event.target.mazeChoice.value
      let layout = await fetchMazeLayout(event.target.mazeChoice.value)
      playMaze(layout)
    })

  gameOptionsForm.append(label, selectMenu, button)
  gameOptionsContainer.append(gameOptionsForm)
}  

function leaderboard() {
  //show a list of all mazes
  //user can select from that list a maze
  //add option queue here (produce mazeID for render)
  selectMazeForLeaderboard()
}

function comments() {
  //shows all comments
  //allows for the creation of a comment, comments will reference maze played (selection)
  //users can delete or edit their own comments
  renderComments()
}

function logout() {
  //clear current user
  //rest page to login view

  currentUser = {}
  let navbar = document.querySelector("#loggedInOptions");
  navbar.style.visibility = "hidden"

  let title = document.querySelector("#title")
  title.removeEventListener('click', welcome)
  
  renderLogin()
}

function clearScreen() {
  let containers = document.querySelectorAll(".container")
  containers.forEach((container)=>{
    container.innerHTML = ""
    container.style.display = "none"
  })
  //clear events from unfinished games
  clearInterval(interval)
  document.removeEventListener('keydown', checkKey)
  //need to add code for clearing the event listener from 'keydown' created in mazegame
}