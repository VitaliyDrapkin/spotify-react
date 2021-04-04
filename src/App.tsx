import React, { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainModule from "./modules/main";
import Provider from "./store/Context/Provider";

export const CountContext = createContext(null);

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <div className="App">
          <MainModule></MainModule>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
