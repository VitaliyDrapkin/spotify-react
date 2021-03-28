import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainModule from "./modules/main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainModule></MainModule>
      </div>
    </BrowserRouter>
  );
}

export default App;
