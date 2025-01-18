const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

const getWeather = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY; // API key from .env
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url); // Make API request
    const data = response.data;
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('City not found. Please try again.');
    } else {
      throw new Error('Unable to fetch weather data. Check your network or API key.');
    }
  }
};

module.exports = { getWeather };
