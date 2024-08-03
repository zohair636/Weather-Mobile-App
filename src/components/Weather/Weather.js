import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../StyleSheet/Weather";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentClouds, setCurrentClouds] = useState("");
  const [currentHumidity, setCurrentHumidity] = useState("");
  const [currentWind, setCurrentWind] = useState("");
  const [currentSunrise, setCurrentSunrise] = useState("");
  const [currentSunSet, setCurrentSunSet] = useState("");
  const [currentUv, setCurrentUv] = useState("");
  const [forecastData, setForecastData] = useState([]);
  const [forecastDay, setForecastDay] = useState("");
  const [forecastIcon, setForecastIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const date = new Date();

  const handleCityChange = (text) => {
    setCity(text);
  };

  const WeatherAPI = async () => {
    const apiUrl = `${process.env.EXPO_PUBLIC_BASE_URL}?q=${city}&appid=${process.env.EXPO_PUBLIC_API_KEY}&units=metric`;

    const response = await axios.get(apiUrl);
    const temp = response.data.main.temp_max;
    const weather = response.data.weather;
    const country = response.data.sys.country;
    const clouds = response.data.clouds.all;
    const humidity = response.data.main.humidity;
    const wind = response.data.wind.speed;
    const sunRise = response.data.sys.sunrise;
    const sunSet = response.data.sys.sunset;
    const getWeather = [];
    for (const data of weather) {
      const weatherDescription = data.main;

      getWeather.push(weatherDescription);
    }
    setTemperature(temp);
    setCurrentWeather(getWeather);
    setCurrentCountry(country);
    setCurrentClouds(clouds);
    setCurrentHumidity(humidity);
    setCurrentWind(wind);
    setCurrentSunrise(sunRise);
    setCurrentSunSet(sunSet);
  };

  const forecastAPI = async () => {
    try {
      const apiUrl = `${process.env.EXPO_PUBLIC_FORECAST_BASE_URL}?key=${process.env.EXPO_PUBLIC_FORECAST_API_KEY}&q=${city}&days=7&aqi=yes&alerts=no`;
      setIsLoading(true);
      const response = await axios.get(apiUrl);
      const humidity = response.data.current.humidity;
      const uv = response.data.current.uv;
      const temp = response.data.current.feelslike_c;
      const weather = response.data.current.condition.text;
      const wind = response.data.current.wind_kph;
      const forecast = response.data.forecast.forecastday;
      const forecastIcons = `https:${response.data.current.condition.icon}`;
      setForecastIcon(forecastIcons);

      const getForecast = [];
      const getHours = [];
      const getDay = [];
      for (const data of forecast) {
        const avgTemp = data.day.avgtemp_c;
        const forecastDay = data.day.condition.text;
        const forecastTime = data.hour;

        getForecast.push(avgTemp);
        getHours.push(forecastTime);
        getDay.push(forecastDay);
      }
      setCurrentHumidity(humidity);
      setCurrentUv(uv);
      setTemperature(temp);
      setCurrentWeather(weather);
      setCurrentWind(wind);
      setForecastData(getForecast);
      setForecastDay(getDay);
      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderForecast = ({ item, index }) => {
    return (
      <View
        key={item?.id}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.cloudsSetting}>
          <Image
            source={{
              uri: forecastIcon,
            }}
            width={45}
            height={45}
          />
          {forecastData.length > 0 ? (
            <View>
              <Text style={styles.cloudDataTxt}>{item.text}</Text>
              <Text style={styles.cloudDataTxt}>
                {parseFloat(item).toPrecision(2)}&deg;
              </Text>
            </View>
          ) : (
            <Text style={styles.cloudDataTxt}>0&deg;</Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.weatherSetting}>
        <View style={styles.mapIcon}>
          <Ionicons name="location-sharp" size={24} color="#FFB200" />
        </View>
        <View>
          {!city && !isLoading ? (
            <Text style={styles.cityNameTxt}>City</Text>
          ) : (
            <View>
              <View>
                <Text style={styles.cityNameTxt}>{city}</Text>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "500",
                  margin: 5,
                }}
              >
                {date.toDateString()}
              </Text>
            </View>
          )}
        </View>
        <TextInput
          placeholder="Enter City Name"
          value={city}
          onChangeText={handleCityChange}
          style={styles.textInputSetting}
          placeholderTextColor={"#fff"}
        />
        <Pressable style={styles.submitBtn} onPress={forecastAPI}>
        {isLoading ? (
        <ActivityIndicator size={'small'} />
        ) : (
          <Text style={styles.submitBtnTxt}>Submit</Text>
        )}
        </Pressable>
        <View style={{ flexDirection: "row" }}>
          {!temperature ? (
            <Text style={{ ...styles.temperatureTxt, fontSize: 50 }}>
              0&deg;
            </Text>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.temperatureTxt}>
                {parseFloat(temperature).toPrecision(2)}
              </Text>
              <Text style={{ ...styles.temperatureTxt, fontSize: 36 }}>
                &deg;C
              </Text>
            </View>
          )}
        </View>
        <View>
          <Text style={styles.weatherTxt}>{currentWeather}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: "5%" }}>
          <View style={styles.humidity_UV_Setting}>
            <Ionicons name="water" size={24} color="white" />
            {!currentHumidity ? (
              <Text style={{ ...styles.humidity_UV_Txt, paddingLeft: 5 }}>
                0%
              </Text>
            ) : (
              <Text style={{ ...styles.humidity_UV_Txt, paddingLeft: 5 }}>
                {currentHumidity}%
              </Text>
            )}
          </View>
          <View style={{ ...styles.humidity_UV_Setting }}>
            <Ionicons name="sunny" size={24} color="white" />
            {!currentUv ? (
              <Text style={{ ...styles.humidity_UV_Txt, paddingLeft: 5 }}>
                0%
              </Text>
            ) : (
              <Text style={{ ...styles.humidity_UV_Txt, paddingLeft: 5 }}>
                {currentUv}%
              </Text>
            )}
          </View>
          <View style={{ ...styles.humidity_UV_Setting }}>
            <FontAwesome5 name="wind" size={24} color="white" />
            {!currentWind ? (
              <Text style={{ ...styles.humidity_UV_Txt, paddingLeft: 10 }}>
                0km
              </Text>
            ) : (
              <Text style={{ ...styles.humidity_UV_Txt, paddingLeft: 10 }}>
                {currentWind}km
              </Text>
            )}
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              margin: 5,
              paddingLeft: 5,
              fontWeight: "500",
            }}
          >
            Weekly Forecast
          </Text>
          <View style={styles.endLine} />
        </View>
        {isLoading ? (
        <ActivityIndicator size={'small'} />
        ) : (
        <FlatList
          horizontal
          data={forecastData}
          renderItem={renderForecast}
          keyExtractor={(item) => item.id}
        />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Weather;
