import React from "react";
import Rating from "@mui/material/Rating";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";


const Product = ({ item }) => {

  return (
    <div className="productcon col-3 my-4">
      <div class="card-product">
        <img class="card-img" src={item.img} alt={item.id} />
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.description}</p>
          <Rating
            name="read-only"
            defaultValue={item.rating}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
      <div className="icon-pro">
        <Link to={`/ProductDetail/${item.id}/`}>
          <FavoriteBorderIcon />
        </Link>
        <Link to={`/ProductDetail/${item.id}/`}>
          <ShoppingCartOutlinedIcon />
        </Link>
        <Link to={`/ProductDetail/${item.id}/`}>
          <ShoppingCartOutlinedIcon />
        </Link>
      </div>
    </div>
  );
};

export default Product;
