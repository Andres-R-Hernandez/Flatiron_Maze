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
    tableHeadRow.append(nameColumn, mazeColumn, descriptionColumn, dateColumn)
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
        tableRow.append(name, maze, description, date)
        commentTable.append(tableRow)
    })

    commentContainer.append(commentTable)
}