import React, { useEffect, useState } from "react";
const apiKey = "b7f172124e075c9c4c942b337794bef2";
const WeatherComp = () => {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitue] = useState();
  const getLocation = () => {
    if (navigator.geolocation) {
      const lol = navigator.geolocation.getCurrentPosition((pos) => {
        setLatitue(pos.coords.longitude);
        setLongitude(pos.coords.longitude);
      });
    }
  };
  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,dail&appid=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <button onClick={getLocation}>lol</button>
    </div>
  );
};

export default WeatherComp;
