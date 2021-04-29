import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "./Home.css";
import homeThumbnail from "./images/home_thumbnail.png";
import Product from "./Product";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://evening-cliffs-59773.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(1, 25)));
  }, []);
  return (
    <div classNames="home">
      <div className="home_container">
        <div className="home_image">
          <img src={homeThumbnail} alt="" className="home_image" />
        </div>
        <div className="home_row">
          {!products.length && (
            <Loader
              type="Rings"
              color="#00BFFF"
              height={100}
              width={100}
            ></Loader>
          )}
          {products.length &&
            products.map((product) => <Product product={product} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
