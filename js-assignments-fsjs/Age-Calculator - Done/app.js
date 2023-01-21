const container = document.getElementsByClassName("container")[0];
const error = document.getElementsByClassName("error")[0];

function getAge(){
    const timeString = document.getElementById("dob").value;
    const timeParsed = new Date() - new Date(timeString).getTime();
    return timeParsed
}

function calcAge(age){ 
    const _days = Math.floor(age / (60 * 60 * 24 * 1000))
    console.log(_days);
    const _months = Math.floor(_days / 30.5);
    
    const days = Math.floor(_days % 30);
    const months = _months % 12;
    const years = Math.floor(_months / 12);

    console.log(years, months, days);
    return [years, months, days]
}

function displayAge(years, months, days){
    container.getElementsByClassName("desc")[0].textContent = "Your Age is : " + years + " years"
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
}

window.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const age = getAge();
        const [years, months, days] = calcAge(age);
        displayAge(years, months, days);
    }
})