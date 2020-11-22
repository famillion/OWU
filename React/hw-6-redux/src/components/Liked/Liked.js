import React from "react";
import SingleItem from "../Showcase/Single-item/SingleItem";

const Liked = ({likes, addToCart, removeFromCart, addLikeToItem, removeLikeFromItem}) => {

  return (
    <div >
      <h1 className="showcase-title">Вподобано товарів {likes.length}</h1>

      <div className="d-flex justify-content-around flex-wrap col-xl-10 offset-xl-1 col-md-12 offset-md-0 col-sm-10 offset-sm-1">
        {
          likes.map(item => (<SingleItem
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

export default Liked
