function r() {
    return Math.floor(Math.random() * 256 + 1);
}

document.getElementById("button").addEventListener("click", function (event) {
    document.getElementById('canvas').style.background = `rgb(${r()}, ${r()}, ${r()})`;
})

window.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("button").click();
    }
})