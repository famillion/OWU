import React from 'react';
import { Switch} from "react-router";
import Showcase from "../components/Showcase/Showcase";
import {BrowserRouter as Router, Route} from "react-router-dom";


const TistoNavigate = props => {

  return (
    <Router>
      <Switch>
        <Route path={'/'} exact render={()=><Showcase {...props}/>}/>

        <Route exact render={()=>(<div>404</div>)}/>
      </Switch>
    </Router>
    );

}

export default TistoNavigate;
