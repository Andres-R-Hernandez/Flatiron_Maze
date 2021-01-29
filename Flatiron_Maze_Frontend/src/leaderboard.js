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

    // debugger
    let sortedData = data.sort((a, b) => {
        return a.score - b.score
    });

    sortedData.forEach((scoreData) => {
        let tableRow = document.createElement("tr")
        let name = document.createElement("td")
        name.innerText = scoreData.player.name
        let maze = document.createElement("td")
        maze.innerText = scoreData.maze_id
        let score = document.createElement("td")
        score.innerText = scoreData.score
        let date = document.createElement("td")
        date.innerText = scoreData.created_at
        tableRow.append(name, maze, score, date)
        scoreTable.append(tableRow)
    })
    leaderboardContainer.append(scoreTable)
}



