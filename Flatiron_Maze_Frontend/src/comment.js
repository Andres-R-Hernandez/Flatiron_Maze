function renderComments() {
    //grab all comments
    fetch(`http://localhost:3000/comments`)
    .then(resp => resp.json())
    .then(data => showComments(data))
}

function showComments(data) {
    let commentContainer = document.querySelector("#comments-container")
    commentContainer.style.display = "block"
    let title = document.createElement("h2")
    title.innerText = "Comments"
    commentContainer.append(title)

    let commentTable = document.createElement("table")
    let tableHeadRow = document.createElement("tr")
    let nameColumn = document.createElement("th")
    nameColumn.innerText = "Player Name"
    let mazeColumn = document.createElement("th")
    mazeColumn.innerText = "Maze"
    let descriptionColumn = document.createElement("th")
    descriptionColumn.innerText = "Description"
    let dateColumn = document.createElement("th")
    dateColumn.innerText = "Date Created"
    let deleteColumn = document.createElement("th")
    deleteColumn.innerText = "delete?"
    let editColumn = document.createElement("th")
    editColumn.innerText = "edit?"
    tableHeadRow.append(nameColumn, mazeColumn, descriptionColumn, dateColumn, deleteColumn, editColumn)
    commentTable.append(tableHeadRow)

    data.forEach((comment) => {
        let tableRow = document.createElement("tr")
        let name = document.createElement("td")
        name.innerText = comment.player.name
        let maze = document.createElement("td")
        maze.innerText = comment.maze_id
        let description = document.createElement("td")
        description.innerText = comment.description
        let date = document.createElement("td")
        date.innerText = comment.created_at
        
        let deleteEE = document.createElement("td")
        let deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        deleteBtn.addEventListener('click', function (){
            deleteComment(comment.id) 
        })
        deleteEE.append(deleteBtn)

        let editEE = document.createElement("td")
        let editBtn = document.createElement("button")
        editBtn.innerText = "edit"
        editBtn.addEventListener('click', function (){
            editCommentForm(comment.id, comment.description) 
        })
        editEE.append(editBtn)

        tableRow.append(name, maze, description, date, deleteEE, editEE)
        commentTable.append(tableRow)
    })

    commentContainer.append(commentTable)
}

function addCommentAfterWin() {
    let commentContainer = document.querySelector("#comments-container")
    commentContainer.style.display = "block"
    let commentForm = document.createElement("form")
    let textArea = document.createElement("textarea")
    textArea.name = "textArea"
    textArea.placeholder = "Have a comment about that game? Type here!"
    let submitBtn = document.createElement("input")
    submitBtn.name = "submit"
    submitBtn.type = "submit"
    submitBtn.value = "submit"
    //hidden inputs for the maze and the currentplayer
    let user = document.createElement("input")
    user.type = "hidden"
    user.name = "playerID"
    user.value = currentUser.id
    let maze = document.createElement("input")
    maze.type = "hidden"
    maze.name = "mazeID"
    maze.value = currentMaze
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault()
        submitComment(event.target)
    })

    commentForm.append(textArea, submitBtn, user, maze)
    commentContainer.append(commentForm)
}


function submitComment(submittedComment) {
    newComment = {
        player_id: parseInt(submittedComment.playerID.value,10),
        maze_id: parseInt(submittedComment.mazeID.value,10),
        description: submittedComment.textArea.value
    }

    resPkg = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(newComment)
    }

    fetch("http://localhost:3000/comments/new", resPkg)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        alert("Thank you! Your comment has been Saved! You can view yours and others in the 'Comments' section.");
    })
    .catch(function(error) {
        alert("UH OH! Something bad happened. Your comment was not saved");
        console.log(error.message);
      });
}

function deleteComment(commentId) {
    reqPack = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    }
    fetch(`http://localhost:3000/comments/${commentId}`, reqPack)
        .then(r=>r.json())
        .then((data) => {
            clearScreen()
            showComments(data)
        })
}

function editCommentForm(commentId, previousDecription) {
    clearScreen()
    let commentContainer = document.querySelector("#comments-container")
    commentContainer.style.display = "block"
    let title = document.createElement("h4")
    title.innerText = "Edit Your Comment Below"
    commentContainer.append(title)
    let commentForm = document.createElement("form")
    let textArea = document.createElement("textarea")
    textArea.name = "textArea"
    textArea.innerText = previousDecription
    let submitBtn = document.createElement("input")
    submitBtn.name = "submit"
    submitBtn.type = "submit"
    submitBtn.value = "submit"
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault()
        editComment(commentId, event.target.textArea.value)
    })
    commentForm.append(textArea, submitBtn)
    commentContainer.append(commentForm)
}

function editComment(commentId, newDescription){
    let newComment = {
        id: commentId, 
        description: newDescription
    }
    reqPack = {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newComment)
    }
    fetch(`http://localhost:3000/comments/${commentId}`, reqPack)
        .then(r=>r.json())
        .then((data) => {
            clearScreen()
            showComments(data)
        })
}
