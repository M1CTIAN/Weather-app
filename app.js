const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("home");
});

app.post("/", function (req, res) {
    const apiKey = "62170b4b7f20f0ea9db24340d69a7777";
    const query = req.body.cityName;
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&q=" + query + "&units=" + unit;
    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temperature = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/w/" + icon + ".png";
            const feelsLike = weatherData.main.feels_like;
            const humidity = weatherData.main.humidity;
            const pressure = weatherData.main.pressure;
            const windSpeed = weatherData.wind.speed;
            const windDirection = weatherData.wind.deg;
            const windGust = weatherData.wind.gust;
            const visibility = weatherData.visibility;
            const cloudcover = weatherData.clouds.all;
            const uvIndex = weatherData.uvi;
            const ozone = weatherData.ozone;
            res.render("weather",{cityName: query, temperature: temperature, weatherDescription: weatherDescription, weatherIcon: imageURL, feelsLike: feelsLike, humidity: humidity, pressure: pressure, windSpeed: windSpeed, windDirection: windDirection, windGust: windGust, visibility: visibility, cloudcover: cloudcover, uvIndex: uvIndex, ozone: ozone})
        });
    });
});



app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});