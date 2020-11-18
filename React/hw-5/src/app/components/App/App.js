import React from "react";

import './App.css';
import NavMenu from "../Nav-menu/NavMenu";
import RoutesComponent from "../../RoutesComponent/RoutesComponent";


function App() {
  return (
    <React.Fragment>
      <NavMenu/>
      <RoutesComponent/>
    </React.Fragment>
  );
}

export default App;

