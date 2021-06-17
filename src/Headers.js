import { Search, ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Headers.css";
import logo from "./images/logo.png";
import { useStateValue } from "./StateProvider";
const Headers = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="" />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <Search className="header_searchIcon"></Search>
      </div>
      <div className="header_nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header_option">
            <span className="header_optionLineTwo">Home</span>
          </div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header_option">
            <span className="header_optionLineTwo">Sign in</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineTwo">Orders</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header_optionBasket">
            <div className="header_option">
              <span className="header_optionLineTwo">Checkout</span>
            </div>
            <ShoppingBasket></ShoppingBasket>
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Headers;
