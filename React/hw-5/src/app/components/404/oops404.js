import React from "react";


export const oops404 = () => {
  return (
    <div className="jumbotron AllBg">
      <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 content-block shadow-lg p-5 text-center">
        <h1 className="display-2" style={{color: 'red'}}>404</h1>
        <small className="lead text-muted">Oops! You're lost. </small>
      </div>
    </div>
  );
}
