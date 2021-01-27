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
  let playgame = document.querySelector("#imgBtn1")
  playgame.addEventListener('click', () => {
    clearScreen()
    playGame()
  });
  let leaderboard = document.querySelector("#imgBtn2")
  leaderboard.addEventListener('click', () => {
    clearScreen()
    Leaderboard()
  });
  let comments = document.querySelector("#imgBtn3")
  comments.addEventListener('click', () => {
    clearScreen()
    Comments()
  });
  let logout = document.querySelector("#imgBtn4")
  logout.addEventListener('click', () => {
    clearScreen()
    Logout()
  });
}


function playGame() {
  //grab container
  //render difficulty options
  //fetch mazes from DB
  //display options in a dropdown (or render mini mazes????)
  //initiate game with options

  let arrayString = fetchMazes("hard")
  debugger
  let x = arrayString[0].layout
  let array = arrayParse(x)
  playMaze(array)
  // debugger

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
    

  // render mazes for difficulty, give user option of mazes available (for chosen difficulty)
  //once maze is shown, render maze and begin play
  //form to add comment shown below maze and counter (automatically linked to maze)
}

function Leaderboard() {
  //show a list of all mazes
  //user can select from that list a maze
  //render leaderboard for chosen maze
  //form to add comment shown below leaderboard (automatically linked to maze)

  //add option queue here (produce mazeID for render)

  renderLeaderboard(1)
}

function Comments() {
  //shows all comments
  //allows for the creation of a comment, comments will reference maze played (selection)
  //users can delete or edit their own comments
}

function Logout() {
  //clear current user
  //rest page to login view
}

function clearScreen() {
  let containers = document.querySelectorAll(".container")
  containers.forEach((container)=>{
    container.innerHTML = ""
  })
}