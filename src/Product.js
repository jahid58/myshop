import React from "react";
import "./Product.css";
import { Star } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

const Product = (props) => {
  const { _id, name, img, price } = props.product;
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        _id: _id,
        name: name,
        img: img,
        price: price,
        rating: 4,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{name}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product_rating">
        {Array(4)
          .fill()
          .map((_, i) => (
            <p>
              <Star></Star>
            </p>
          ))}{" "}
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
