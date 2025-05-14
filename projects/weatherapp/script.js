let form = document.querySelector('.myForm')
form.onsubmit = function (event) {
    event.preventDefault();
    let userInputElement = document.querySelector('form input')
    let userEnteredCity = userInputElement.value;
    fetchWeather(userEnteredCity)
}

async function fetchWeather(city) {
    let apiKey = "8fa22219905040c98d9152551251405"
    let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    let data = await res.json();
    console.log(data)

    const { current } = data
    const { temp_c, condition } = current;
    const { text, icon } = condition;
    displayWeather(temp_c, text, icon)
}

function displayWeather(temperature, conditionText, icon) {
    let displayElement = document.querySelector('.displayWeather')
    displayElement.innerHTML = `
    <img src="${icon}"/>
    <h1>${temperature}<sup>o</sup>C</h1> <br/>
    <h2>${conditionText}</h2>
    `
}