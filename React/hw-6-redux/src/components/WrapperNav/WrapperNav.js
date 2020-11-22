import React from 'react';

import {withRouter} from "react-router";
import Showcase from "../Showcase/Showcase";
import Liked from "../Liked/Liked";
import PageNotFound from "../page404/PageNotFound";
import Cart from "../Cart/Cart";


const WrapperNav = props => {

  let {pathname} = props.location;

  return (
    <section>
      {
        (
          () => {
            switch (pathname) {
              case '/':
                return (<Showcase {...props}/>);
              case '/liked':
                return (<Liked {...props}/>);
              case '/cart':
                return (<Cart {...props}/>);
              default:
                return (<PageNotFound/>);
            }
          }
        )()
      }
    </section>
    );

}

export default withRouter(WrapperNav);
