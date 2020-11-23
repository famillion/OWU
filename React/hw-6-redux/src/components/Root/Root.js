import React from 'react';

import {Provider} from "react-redux";
import App from "../App/App";
import {BrowserRouter} from "react-router-dom";




const Root = ({store,routeHistory}) => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  );


}

export default Root;
