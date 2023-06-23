import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div>
      <div className="container-fluid py-3 d-flex justify-content-between align-items-center">
        <div className="input-group w-75">
          <input type="text" className="form-control" placeholder="Search" />
          <span className="input-group-text">
            <SearchIcon />
          </span>
        </div>
        <div className="w-100">
          <h2 className="text-center fw-bolder mb-0">
            <Link to="/">LOGO</Link>
          </h2>
        </div>
        <div className="container d-flex w-75  justify-content-end align-items-center">
          <Link to="/register" className="px-2">
            REGISTER
          </Link>
          <Link to="/login" className="px-2">
            SING IN
          </Link>
          <div className="px-2">
            <span onClick={() => setCartIsOpen(!cartIsOpen)}>
              <Badge badgeContent={products.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </span>
          </div>
        </div>
      </div>
      {cartIsOpen && <Cart />}
    </div>
  );
};

export default Navbar;
