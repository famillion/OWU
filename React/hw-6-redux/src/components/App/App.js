import React from 'react';
import {items} from './../../itemsData/itemsData';
import './App.css';

import {connect} from 'react-redux';
import {addToCart, removeFromCart} from "../../store/cart/actions";
import {addLikeToItem, removeLikeFromItem} from "../../store/likes/actions";
import Header from "../Header/Header";
import WrapperNav from "../WrapperNav/WrapperNav";

function App(props) {

  return (
    <div className="bg showcase col-xl-10 offset-xl-1 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1">
      <Header cartCount={props.cart.length} likeCount={props.likes.length}/>

      <WrapperNav {...props}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    likes: state.likesReducer.likes,
    items: state.cartReducer.items
  }
}


export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  addLikeToItem,
  removeLikeFromItem
})(App);
