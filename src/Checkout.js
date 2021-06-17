import React from "react";
import add__img from "./images/logo.png";
import "./Checkout.css";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
import CheckoutProducts from "./CheckoutProducts";
import { useStateValue } from "./StateProvider";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          <Link to="/">
            <img className="checkout__add" src={add__img} alt="" />
          </Link>

          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal></Subtotal>
        </div>
      </div>
      <div className="checkoutProducts">
        {basket.length &&
          basket.map((product) => (
            <CheckoutProducts product={product}></CheckoutProducts>
          ))}
      </div>
    </div>
  );
};

export default Checkout;
