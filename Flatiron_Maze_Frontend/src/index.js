//ANOTHER ONE
//hello
//Global varaible for current logged in user
let currentUser = {}
//Global variable for game counter. needs to be global for reset outside of playMaze function
let interval
//Global variable for the current maze
let currentMaze = 4
//Global variable for player position during game
let playerPosition

document.addEventListener("DOMContentLoaded", () => {
  buttonEvents()
  renderLogin()
})

function buttonEvents() {
  //grab button from document
  //add event listener
  //within eventlistener, add callback function to render new view ex: playGame()
  //event listener also clears the screen prior to rendering new view
  let playgameBtn = document.querySelector("#imgBtn1")
  playgameBtn.addEventListener('click', () => {
    clearScreen()
    playGame()
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
}

async function playGame() {
  //grab container
  //render difficulty options
  //fetch mazes from DB
  //display options in a dropdown (or render mini mazes????)
  //initiate game with options

  let arrayString = await fetchMazes("hard")
  let x = arrayString[0].layout
  arrayParse(x)
  playMaze(array)

  // let gameContainer = document.querySelector("#form-container")
  // let gameOptionsForm = document.createElement('form')
  // gameOptionsForm.innerHTML = 
  //   `<label for="difficulty">Choose a Difficulty:</label>
  //   <select id="difficulty">
  //     <option value="easy">Easy</option>
  //     <option value="medium">Medium</option>
  //     <option value="hard">Hard</option>
  //   </select>
  //   <input type="submit" value="submit">`
  //   gameContainer.append(gameOptionsForm)
  //   gameOptionsForm.addEventListener('submit', (event) => {
  //     event.preventDefault()
  //     console.log("now here!")
  //   })

  //IMPORTANT, inside function to choose maze, add to current maze global variable
    

  //render mazes for difficulty, give user option of mazes available (for chosen difficulty)
  //once maze is shown, render maze and begin play
  //form to add comment shown below maze and counter (automatically linked to maze)
}

function leaderboard() {
  //show a list of all mazes
  //user can select from that list a maze
  //add option queue here (produce mazeID for render)

  //render leaderboard for chosen maze
  renderLeaderboard(4)

  //form to add comment shown below leaderboard (automatically linked to maze)
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