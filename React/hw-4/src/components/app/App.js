import React from "react";

import './App.css';
import MyRouter from "../../Router/MyRouter";
import NavMenu from "../nav-menu/Nav-Menu";
import Oops404 from "../404/Oops404";


function App() {
  return (
    <div>

      <NavMenu/>
      <MyRouter/>

    </div>

  );
}

export default App;
