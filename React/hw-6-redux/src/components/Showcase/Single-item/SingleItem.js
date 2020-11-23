import React from "react";
import {addToCart, removeFromCart} from "../../../store/cart/actions";
import {addLikeToItem, removeLikeFromItem} from "../../../store/likes/actions";

import './SingleItem.css';
import addToCartIMG from './img/add-to-cart.png';
import inCartIMG from './img/item-in-cart.png';
import likedIMG from './img/liked.png';
import unlikedIMG from './img/unliked.png';

const SingleItem = ({item, action}) => {

  let {name, about, price, src, isLiked, inCart} = item;

  return (
    <div className={`card col-xl-3 col-lg-3 col-md-5 col-sm-8 m-2 p-0 rounded shadow ${inCart && 'in-cart'}`}
         style={{minWidth: '16rem', height: '26rem'}}>
      <img src={src} className="card-img-top" style={{height: '12rem'}} alt={name}/>
      <div className="card-body bg-body-card">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{about}</p>
      </div>
      <div className="action-field d-flex align-items-center justify-content-between">
        <div className="m-auto action-field-item"
             onClick={!isLiked ? () => action(addLikeToItem(item)) : () => action(removeLikeFromItem(item))}
        >
          <img
            src={isLiked ? likedIMG : unlikedIMG}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </div>
        <div className="m-auto action-field-item"
             onClick={!inCart ? () => action(addToCart(item)) : () => action(removeFromCart(item))}
        >|
          <span className="price-txt">{price} грн</span>
          <img
            src={inCart ? inCartIMG : addToCartIMG}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
