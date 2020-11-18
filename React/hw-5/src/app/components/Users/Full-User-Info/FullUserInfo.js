import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {backBTN} from "../../../Services/backBTN";
import {getUserByID} from "../../../Services/ServicesALL";

const FullUserInfo = props => {

  let {url: path, params: {id: idPath}} = props.match;
  let backPath = backBTN(path);

  let [user, setUser] = useState({});
  let [city, setCity] = useState('No city');

  useEffect( () => {
    const fetchData = async () => {
      let res = {};
      await getUserByID(idPath)
        .then(value => {res = value});
      setUser(res);
      setCity(res.address.city);
    }

    fetchData().then();
  },[idPath]);

  let {name, username, id, email, website, phone} = user;

  return (
    <div className="jumbotron col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 content-block-noclickble p-5 mt-4">
      <div className="d-flex">
        <span className="w-25 font-goldman font-weight-bold">Name: </span>
        <span className="w-50 ml-5 text-monospace">{name}</span>
      </div>
      <hr className="my-2"/>
      <div className="d-flex">
        <span className="w-25 font-goldman font-weight-bold">Username: </span>
        <span className="w-50 ml-5 text-monospace">{username}</span>
      </div>
      <hr className="my-2"/>
      <div className="d-flex">
        <span className="w-25 font-goldman font-weight-bold">ID: </span>
        <span className="w-50 ml-5 text-monospace">{id}</span>
      </div>
      <hr className="my-2"/>
      <div className="d-flex">
        <span className="w-25 font-goldman font-weight-bold">Email: </span>
        <span className="w-50 ml-5 text-monospace">{email}</span>
      </div>
      <hr className="my-2"/>
      <div className="d-flex">
        <span className="w-25 font-goldman font-weight-bold">Tel: </span>
        <span className="w-50 ml-5 text-monospace">{phone}</span>
      </div>
      <hr className="my-2"/>
      <div className="d-flex">
        <span className="w-25 font-goldman font-weight-bold">Website: </span>
        <span className="w-50 ml-5 text-monospace">{website}</span>
      </div>
      <hr className="my-2"/>
      <div className="d-flex">
        <span className="w-25 font-goldman font-weight-bold">City: </span>
        <span className="w-50 ml-5 text-monospace">{city}</span>
      </div>
      <hr className="my-2"/>
      <div className="d-flex justify-content-between mt-3 pt-3">
        <Link to={`${path}/${name}?posts`} className="btn btn-secondary shadow w-25">Posts</Link>
        <Link to={`${backPath}`} className="btn btn-secondary shadow w-25">Back</Link>
      </div>
    </div>
  );
}

export default FullUserInfo;
