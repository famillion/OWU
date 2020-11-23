import React from 'react';

import {Route, Switch, withRouter} from "react-router";
import Showcase from "../Showcase/Showcase";
import Liked from "../Liked/Liked";
import PageNotFound from "../page404/PageNotFound";
import Cart from "../Cart/Cart";


const WrapperNav = props => {


  return (
    <section>
      <Switch>
        <Route path={'/cart'} component={Cart}/>
        <Route path={'/liked'} component={Liked}/>
        <Route path={'/'} exact component={Showcase}/>

        <Route component={PageNotFound}/>
      </Switch>
    </section>
    );

}

export default withRouter(WrapperNav);
