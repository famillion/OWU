import React from "react";

import './Showcase.css';
import SingleItem from "./Single-item/SingleItem";

const Showcase = ({items, addToCart, removeFromCart, addLikeToItem, removeLikeFromItem}) => {

  return (
    <div className="">
      <h1 className="showcase-title">Сьогдні у продажу:</h1>

      <div className="d-flex justify-content-around flex-wrap col-xl-10 offset-xl-1 col-md-12 offset-md-0 col-sm-10 offset-sm-1">
        {
          items.map(item => (<SingleItem
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            addLikeToItem={addLikeToItem}
            removeLikeFromItem={removeLikeFromItem}
            key={item.id}/>))
        }
      </div>

    </div>
  );
};

export default Showcase;
