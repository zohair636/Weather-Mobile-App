import axios from "axios";

BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
API_KEY = "8be90a5551b0300dfcb0192ad3a953fb";

const WeatherAPI = async ({ city }) => {
  const apiUrl = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  console.log("API URL: ", apiUrl);

  const response = await axios.get(apiUrl);
  console.log(response);
};

export { WeatherAPI };
