import React from 'react';
import pnf from './404-error-page.jpg';



const PageNotFound = () => {

  return (
    <div className="shadow-lg rounded mt-5">
      <img src={pnf} alt="404" style={{width: '100%', borderRadius: '5px'}}/>
    </div>
  );
}

export default PageNotFound;
