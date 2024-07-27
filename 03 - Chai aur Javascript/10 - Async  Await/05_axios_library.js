const axios = require("axios")

async function getWeather(city){
    try{
        const apiKey = 'b80b64f61a74dcdf5f66ea159f90cfe0'

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        console.log(`Weather in ${city}: ${response.data.weather[0].description}`);

        console.log(`Temperature is ${response.data.main.temp}`);
    } catch(error){
        console.log("Error fetching data: ", error.message);
    }
}

getWeather("Mumbra")