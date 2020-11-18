import React, {useEffect, useState} from "react";
import SingleUserCard from "./Single-User-Card/Single-User-Card";
import {getAllUsers} from "../../Services/ServicesALL";


const Users = () => {

  let [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res;
      await getAllUsers()
        .then(value => {
          res = value;
        });

      setUsers(res)
    };

    fetchData().then();
  }, []);


  return (
    <React.Fragment>
      {
        users.map(user=><SingleUserCard user={user} key={user.id}/>)
      }
    </React.Fragment>
  );
}

export default Users;
