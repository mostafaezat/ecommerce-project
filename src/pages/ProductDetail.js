import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { popularProducts } from "../data";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/CartReducer";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = popularProducts.filter((item) => params.id == item.id);
  const { id, img, price, description, rating, title } = product[0];
  const countHandler = (e) => {
    setQuantity(e.target.value);
    console.log(product);
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6">
          <img src={img} className="pro-img" alt="hello" />
        </div>
        <div className="col-6">
          <h2>{title}</h2>
          <p>{description}</p>
          <Rating
            name="read-only"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
          <div>
            <h4>
              price:
              <span className="text-decoration-line-through mx-5">$500</span>
              <span className="fw-bolder">just ${price}</span>
            </h4>
          </div>
          <div>
            <input
              className="input-amount px-1"
              max={5}
              min={1}
              type="number"
              value={quantity}
              onChange={countHandler}
            ></input>
            <button
              className="btn btn-outline-success mx-4"
              onClick={() =>
                dispatch(
                  addProduct({
                    id: id,
                    img: img,
                    description: description,
                    rating: rating,
                    title: title,
                    quantity: +quantity,
                    price: price,
                  })
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
