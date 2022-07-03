import React, { Component, useState } from "react";
import "../styles/App.css";
import News from "./News";
import Weather from "./Weather";

const App = () => {
  return (
    <div>
      <div className="weathercont">
        <Weather />
      </div>
      <div className="newscont">
        <News />
      </div>
    </div>
  );
};

export default App;
