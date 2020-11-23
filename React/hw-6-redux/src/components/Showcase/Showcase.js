import React from "react";

import './Showcase.css';
import SingleItem from "./Single-item/SingleItem";
import {useDispatch, useSelector} from "react-redux";


const Showcase = ({addToCart,removeFromCart,addLikeToItem,removeLikeFromItem}) => {

  let items = useSelector(({cartReducer}) => cartReducer.items);
  let action = useDispatch();


  return (
    <div className="">
      <h1 className="showcase-title">Сьогодні у продажу:</h1>

      <div className="d-flex justify-content-around flex-wrap col-xl-10 offset-xl-1 col-md-12 offset-md-0 col-sm-10 offset-sm-1">
        {
          items.map(item => (<SingleItem
            item={item}
            action={action}
            key={item.id}/>))
        }
      </div>

    </div>
  );
};


export default Showcase;
