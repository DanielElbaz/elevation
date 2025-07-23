const container = document.getElementById("container")


const getRandomColor = function () {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]

    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}

for (let i = 0; i < 26; i++) {
    const newContainer = document.createElement("div")
    newContainer.style.backgroundColor = getRandomColor()
    container.appendChild(newContainer); 
    newContainer.onmouseenter = function () {
    this.style.backgroundColor = getRandomColor()
}

}

