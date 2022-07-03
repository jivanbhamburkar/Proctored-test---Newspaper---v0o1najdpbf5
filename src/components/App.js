import React, {Component, useState,useEffect} from "react";
import WeatherComp from "./WeatherComp";
import '../styles/App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState("Delhi");
  const [tempInfo, setTempInfo] = useState({});
  const [lang,setLang] = useState("en")
  const [display,setDisplay] = useState("");

  const getWeatherInfo = async () => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=eefde8ab9ccbfc5ebdc29c2520f348db`

      const res = await fetch(url);
      const data = await res.json();

      const { temp} = data.main;
      const { main: weathermood } = data.weather[0];
      const {name} = data;
      const {country} = data.sys;

        const myNewWeatherInfo = {
          temp,
          weathermood,
          name,
          country,
        };

        setTempInfo(myNewWeatherInfo);
    } catch(error){
      alert("City not Found ");
      //console.log(error);
    }
    setSearchValue("");
   };

   const getnewsInfo = async ()=>{
    let url1 = `https://gnews.io/api/v4/search?q=none&lang=${lang}&token=9a6932a1d156f2ab516e36eae9f043d1`
    const res = await fetch(url1);
    const data = await res.json();
    const {title} = data.articles[0];
    setDisplay(title);
   }
   function changeToEnglish(){
    setLang(en);
    getnewsInfo();
   }
   function changeToHindi(){
    setLang(hi);
    getnewsInfo();
   }

  useEffect(() => {
    getWeatherInfo();
    getnewsInfo();
  },[]);
  return (
    <>
    <div className="wrap">
        <div className="search">
            <input type="search"
            placeholder='search...' autoFocus
            id='search'
            className='searchTerm' 
            value={ searchValue} onChange={(e)=>setSearchValue(e.target.value)}  />
          <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
    </div>
    <div>{display}</div>

    
   
      <Weathercard tempInfo={tempInfo}/>
    </>
  )
}


export default App;
