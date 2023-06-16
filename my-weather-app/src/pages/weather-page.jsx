import Grid from "@mui/material/Grid";
import React, { useContext, useEffect, useState } from "react";
import InteractiveSection from "../components/Interactive-section/interactive-section.jsx";
import { tempContext } from "../components/context/context.js";
import Footer from "../components/footer/footer.jsx";
import Header from "../components/header/header.jsx";
import HourlyWeatherSection from "../components/hourly-weather-section/hourly-weather-section.jsx";
import PodcastSection from "../components/pocast-section/podcast-section.jsx";
import SearchBar from "../components/seach-bar/search-bar.jsx";
import WeeklyWeatherSection from "../components/weekly-weather-section/weekly-weather-section.jsx";
import "./style.css";

export default function WeatherPage() {
  const temp = useContext(tempContext);
  const [newTempUnit, updateTemp] = useState(temp);
  let [currentPositionWeather, setCurrentPositionWeather] = useState({});
  let [currentCity, setCurrentCity] = useState("");
  let [searchedCity, setSearchedCity] = useState({});

  const url = "https://spotify-backend-rgoy.onrender.com";
  const options = { method: "GET", mode: "cors", headers: { "Access-Control-Allow-Origin": "*" } };

  useEffect(() => {
    if (navigator.geolocation && searchedCity.name === undefined) {
      //Si la localización está activada y no hay ciudad buscada entonces busca por geolocalización
      getUserCurrentPosition();
    } else if (searchedCity !== undefined) {
      //Si hay una ciudad buscada entonces trae los datos de esa ciudad
      getWeatherInfoByCity(searchedCity.name);
    } else {
      console.log("error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newTempUnit]);

  function getUserCurrentPosition() {
    //Trae la locacalización actual del usuario
    navigator.geolocation.getCurrentPosition(async function (position) {
      const responseCityFetch = await fetch(
        `${url}/getcitycurrentpositionname/${position.coords.latitude}/${position.coords.longitude}/${newTempUnit}`,
        options
      );
      const cityFetch = await responseCityFetch.json();
      setCurrentCity(cityFetch.name);

      const responseWeatherFetch = await fetch(
        `${url}/getcitycurrentpositionweather/${position.coords.latitude}/${position.coords.longitude}/${newTempUnit}`,
        options
      );
      const weatherFetch = await responseWeatherFetch.json();

      setCurrentPositionWeather({ ...weatherFetch });
      setSearchedCity({});
    });
  }

  async function getWeatherInfoByCity(city) {
    //Trae el tiempo actual de la ciudad buscada

    const reponseSearchedCityFetch = await fetch(`${url}/getweatheringfobycity/${city}/${newTempUnit}`, options);
    const searchedCityFetch = await reponseSearchedCityFetch.json();
    setSearchedCity(searchedCityFetch.data);
    setCurrentCity(searchedCityFetch.data.name);
    setCurrentPositionWeather({ ...searchedCityFetch.r });
  }

  const search = (input) => {
    getWeatherInfoByCity(input);
  };

  const getPosition = () => {
    getUserCurrentPosition();
  };

  const onTempChange = () => {
    if (newTempUnit === "metric") updateTemp("imperial");
    else updateTemp("metric");
  };

  return (
    <tempContext.Provider value={newTempUnit}>
      <Grid container columnSpacing={2}>
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={12}>
          <SearchBar onSearch={search} onGeolocation={getPosition}></SearchBar>
        </Grid>
        <Grid item xs={12}>
          <InteractiveSection
            info={currentPositionWeather}
            city={searchedCity}
            currentCity={currentCity}
            onTempChange={onTempChange}
          ></InteractiveSection>
        </Grid>
        <Grid item xs={12}>
          <WeeklyWeatherSection info={currentPositionWeather} />
        </Grid>
        <Grid item xs={12}>
          <HourlyWeatherSection info={currentPositionWeather} />
        </Grid>
        <Grid item xs={12}>
          <PodcastSection info={currentPositionWeather} city={currentCity} />
        </Grid>
        <Grid item xs={12}>
          <Footer></Footer>
        </Grid>
      </Grid>
    </tempContext.Provider>
  );
}
