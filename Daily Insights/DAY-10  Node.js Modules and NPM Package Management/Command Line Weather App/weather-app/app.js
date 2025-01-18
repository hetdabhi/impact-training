require('dotenv').config();
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get weather data using City ID
const getWeather = async () => {
  const apiKey = process.env.OPENWEATHER_API_KEY; // Fetch API key from .env
  const cityId = 2643743; // London City ID
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);

    if (!response.data.main || !response.data.weather) {
      throw new Error('Invalid data received from the API.');
    }

    const data = response.data;
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description
    };
  } catch (error) {
    console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
    throw new Error('Unable to fetch weather data.');
  }
};

// Function to print weather information
const printWeather = (weather) => {
  console.log(`Weather in ${weather.city}:`);
  console.log(`Temperature: ${weather.temperature}°C`);
  console.log(`Description: ${weather.description}`);
};

// Main function to run the app
const runApp = async () => {
  try {
    console.log(`Fetching weather for London...`);

    const weather = await getWeather(); // Get the weather data using the City ID
    printWeather(weather); // Print the weather details
  } catch (error) {
    console.error(error.message); // Handle any errors
  }
};

runApp(); // Run the app
