const convertButton = document.getElementById("convert-btn");

function camelCase(text) {
    let camelCaseText = "";
    let prevWord = "";

    for (letter of text) {
        if (letter.includes(" ")) {
            prevWord = letter;
            continue
        }

        if (text.indexOf(letter) == 0) {
            camelCaseText += letter.toLowerCase();
        }
        
        else if (prevWord.includes(" ")) {
            camelCaseText += letter.toUpperCase();
        }

        else {
            camelCaseText += letter.toLowerCase();
        }
        prevWord = letter;
    }
    return camelCaseText;
}

function pascalCase(text) {
    let pascalCaseText = "";
    let splitWords = text.split(" ");
    splitWords = splitWords.map((word) => { return word.charAt(0).toUpperCase() + word.slice(1) });
    pascalCaseText = splitWords.join("");
    return pascalCaseText;
}

function snakeCase(text, screaming = false) {
    let snakeCaseText = "";
    let splitWords = text.split(" ");
    splitWords = splitWords.map((word) => { return screaming ? word.toUpperCase() : word.toLowerCase() });
    snakeCaseText = splitWords.join("_");
    return snakeCaseText
}

function kebabCase(text, screaming = false) {
    let kebabCaseText = "";
    let splitWords = text.split(" ");
    splitWords = splitWords.map((word) => { return screaming ? word.toUpperCase() : word.toLowerCase() });
    kebabCaseText = splitWords.join("-");
    return kebabCaseText
}

convertButton.addEventListener("click", (event) => {
    
    const inputText = document.getElementById("text").value;
    document.getElementById("camel-case").textContent = camelCase(inputText.toString());
    document.getElementById("pascal-case").textContent = pascalCase(inputText.toString());
    document.getElementById("snake-case").textContent = snakeCase(inputText.toString());
    document.getElementById("screaming-snake-case").textContent = snakeCase(inputText.toString(), screaming = true);
    document.getElementById("kebab-case").textContent = kebabCase(inputText.toString());
    document.getElementById("screaming-kebab-case").textContent = kebabCase(inputText.toString(), screaming = true);
})

window.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertButton.click();
    }
})