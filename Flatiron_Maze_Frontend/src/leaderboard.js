function renderLeaderboard(mazeID) {
    //grab timescores for an individual maze
    fetch(`http://localhost:3000/timescores/${mazeID}`)
    .then(resp => resp.json())
    .then(data => showLeaderboard(data))
}

function showLeaderboard(data) {
    let leaderboardContainer = document.querySelector("#leaderboard-container")
    leaderboardContainer.style.display = "block"
    let title = document.createElement("h2")
    title.innerText = "Leaderboard"
    leaderboardContainer.append(title)

    let scoreTable = document.createElement("table")
    let tableHeadRow = document.createElement("tr")
    let nameColumn = document.createElement("th")
    nameColumn.innerText = "Player Name"
    let mazeColumn = document.createElement("th")
    mazeColumn.innerText = "Maze"
    let scoreColumn = document.createElement("th")
    scoreColumn.innerText = "Score"
    let dateColumn = document.createElement("th")
    dateColumn.innerText = "Date"
    tableHeadRow.append(nameColumn, mazeColumn, scoreColumn, dateColumn)
    scoreTable.append(tableHeadRow)

    data.forEach((scoreData) => {
        let tableRow = document.createElement("tr")
        let name = document.createElement("th")
        name.innerText = scoreData.player.name
        let maze = document.createElement("th")
        maze.innerText = scoreData.maze_id
        let score = document.createElement("th")
        score.innerText = scoreData.timescore
        let date = document.createElement("th")
        date.innerText = scoreData.created_at
        tableRow.append(name, maze, score, date)
        scoreTable.append(tableRow)
    })

    leaderboardContainer.append(scoreTable)
}