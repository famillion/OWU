import React from "react";
import SingleItem from "../Showcase/Single-item/SingleItem";
import {useDispatch, useSelector} from "react-redux";


const Cart = () => {

  let cart = useSelector(({cartReducer}) => cartReducer.cart);
  let action = useDispatch();

  console.log(cart);

  let sum = cart.reduce((accum, current) => accum + current.price, 0);

  return (
    <div>
      <h1 className="showcase-title">Всього товарів у кошику: {cart.length}</h1>
      {
        cart.length
          ? <h3 className="text-center font-weight-bold text-danger mb-5">До сплати {sum.toFixed(2)} грн</h3>
          : ''
      }
      <div className="d-flex justify-content-around flex-wrap col-xl-10 offset-xl-1 col-md-12 offset-md-0 col-sm-10 offset-sm-1">
        {
          cart.map(item => (<SingleItem
            item={item}
            action={action}
            key={item.id}/>))
        }
      </div>

    </div>
  );
};


export default Cart;
