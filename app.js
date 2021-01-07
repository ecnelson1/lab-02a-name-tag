const changeName = document.getElementById("change-name-button")

const displayName = document.getElementById("display-name")

const userInput = document.getElementById("user-input")

const tagBody = document.getElementById("tag-body")

const blueButton = document.getElementById("blue")

const blackButton = document.getElementById("black")

const orangeButton = document.getElementById("orange")

const magentaButton = document.getElementById("magenta")

const tagHeader = document.getElementById("header")

const proButton = document.getElementById("proButton")

const proDisplay = document.getElementById("pro-display")

const proInput = document.getElementById("pro-input")

changeName.addEventListener('click', () => {
    tagBody.style.backgroundColor = "green"
    displayName.textContent = userInput.value
})

blueButton.addEventListener('click', () => {
    tagBody.style.backgroundColor = "blue"
})

blackButton.addEventListener('click', () => {
    tagBody.style.backgroundColor = "black"
})

orangeButton.addEventListener('click', () => {
    tagBody.style.backgroundColor = "orange"
})

magentaButton.addEventListener('click', () => {
    tagBody.style.backgroundColor = "magenta"
})

proButton.addEventListener('click', () => {
    proDisplay.textContent = proInput.value
})