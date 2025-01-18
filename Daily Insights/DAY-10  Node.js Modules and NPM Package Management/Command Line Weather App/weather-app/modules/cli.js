const readline = require('readline');

const askCity = () => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Enter a city name: ', (city) => {
      rl.close();
      resolve(city.trim()); // Trim whitespace from input
    });
  });
};

const printWeather = (weather) => {
  console.log(`\nWeather in ${weather.city}:`);
  console.log(`Temperature: ${weather.temperature}°C`);
  console.log(`Description: ${weather.description}\n`);
};

module.exports = { askCity, printWeather };
