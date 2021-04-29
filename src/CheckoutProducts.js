import { Star } from "@material-ui/icons";
import React from "react";
import "./CheckoutProducts.css";
import { useStateValue } from "./StateProvider";
const CheckoutProducts = (props) => {
  const { name, _id, img, price, rating } = props.product;
  const [{ basket }, dispatch] = useStateValue();
  const removeProduct = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      _id: _id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={img} alt="" className="checkoutProduct__img" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(4)
            .fill()
            .map((_, i) => (
              <p>
                <Star></Star>
              </p>
            ))}
        </div>
        <button onClick={removeProduct}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProducts;
