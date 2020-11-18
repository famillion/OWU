import React from "react";
import {withRouter} from "react-router";

const SingleUserCard = props => {

  let {name, email, address: {city}, id} = props.user;
  let {path} = props.match;
  return (
       <div onClick={() => {
         return props.history.push(`${path}/${id}`);
       }}
            className="jumbotron col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 content-block p-5 mt-4">
         <h1 className="display-4">{name}</h1>
         <small className="text-muted">{email}</small>
         <div>
           <small className="lead text-secondary">{city}</small>
         </div>
       </div>
  );
}

export default withRouter(SingleUserCard);
