const jokeButton = document.getElementById("jokeBtn");
const jokeBox = document.getElementById("joke");

jokeButton.addEventListener("click", async function (event) {
    response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    if (response.ok) {
        console.log(response, "Success!");
        //
        json = await response.json();
        jokeBox.textContent = json["joke"];
    }
    else {
        console.log("Error!");
        jokeBox.textContent = "Error finding a joke! ;("
    }
})

window.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        jokeButton.click();
    }
})