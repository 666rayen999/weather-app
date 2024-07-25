"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { location, weather, forecast } from "./Interface";
import Weather from "./Weather";

const WeatherPage = () => {
  const [weather, setWeather] = useState<weather | null>(null);
  const [forecast, setForecast] = useState<forecast | null>(null);
  const [userLocation, setUserLocation] = useState<location | null>(null);
  const [isDone, setDone] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isDone) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
          },
          (error) => {
            setError(`Error getting user location: ${error}`);
          },
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
      if (userLocation) {
        const getWeather = async () => {
          try {
            const response1 = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
            );
            setWeather(response1.data);
            const response2 = await axios.get(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
            );
            setForecast(response2.data);
          } catch (err) {
            setWeather(null);
          }
        };
        getWeather();
        setDone(true);
      }
    }
  }, [userLocation, isDone]);

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center">
      <div className="w-full h-full inset-0 top-0 left-0 absolute bg-black -z-20" />
      {error == null && weather && forecast && (
        <Weather weather={weather} forecast={forecast} />
      )}
      {error && <h1 className="w-full h-full text-center body text-red-dark">{error}</h1>}
    </div>
  );
};

export default WeatherPage;
