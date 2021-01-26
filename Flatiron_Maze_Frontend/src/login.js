// Login
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#imgBtn').addEventListener('click', fRequest)
})

const fRequest = async () => {
    let response = await fetch('http://localhost:3000')
    let imgData = await response.json()

    imgData.forEach(Img => renderImg(Img))
}

const renderImg = (Img) => {
    document.querySelector('#Img-container').innerHTML += ` <div class="card m-2"></div>`}


// Logout


// Homescreen
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#imgBtn').addEventListener('click', fRequest)
})

const fRequest = async () => {
    let response = await fetch('http://localhost:3000')
    let imgData = await response.json()

    imgData.forEach(Img => renderImg(Img))
}

const renderImg = (Img) => {
    document.querySelector('#Img-container').innerHTML += ` <div class="card m-2"></div>`}

// Redirect to homepage taskbar
// Connect 'Play Game', 'Leaderboard', 'Logout'

