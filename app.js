const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
require('dotenv').config();

const app = express();
const port = 3001;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const apiKey = process.env.OPENWEATHER_API_KEY;

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/suggest", async function(req, res) {
    const query = req.query.q;
    if (!query) return res.json([]);
    
    try {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`;
        const response = await axios.get(url);
        const suggestions = response.data.map(item => {
            return item.state ? `${item.name}, ${item.state}, ${item.country}` : `${item.name}, ${item.country}`;
        });
        res.json([...new Set(suggestions)]);
    } catch (error) {
        res.json([]);
    }
});

app.post("/", async function (req, res) {
    const query = req.body.cityName;
    const unit = "metric";
    
    try {
        // Fetch Current Weather
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${query}&units=${unit}`;
        const weatherResponse = await axios.get(weatherUrl);
        const weatherData = weatherResponse.data;

        // Fetch 5-Day Forecast
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${query}&units=${unit}`;
        const forecastResponse = await axios.get(forecastUrl);
        const forecastData = forecastResponse.data;

        // Process Forecast Data
        const dailyForecast = [];
        const processedDates = new Set();

        forecastData.list.forEach(item => {
            const date = new Date(item.dt * 1000);
            const dateString = date.toDateString();
            const hours = date.getHours();

            if (!processedDates.has(dateString) && hours >= 12) {
                dailyForecast.push(item);
                processedDates.add(dateString);
            }
        });

        const currentWeather = {
            cityName: weatherData.name,
            temperature: weatherData.main.temp,
            weatherDescription: weatherData.weather[0].description,
            weatherIcon: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
            feelsLike: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            pressure: weatherData.main.pressure,
            windSpeed: weatherData.wind.speed,
            visibility: weatherData.visibility,
            cloudcover: weatherData.clouds.all,
        };

        res.render("weather", { 
            current: currentWeather, 
            forecast: dailyForecast 
        });

    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        res.render("home", { error: "City not found or API error. Please try again." });
    }
});

app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});