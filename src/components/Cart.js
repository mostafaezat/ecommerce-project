import React, { useEffect } from "react";
import { popularProducts } from "../data";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/CartReducer";
const Cart = () => {
  const pro = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    pro.forEach((element) => {
      total += element.quantity * element.price;
    });
    return total;
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {pro.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt={item.title} />
          <div>
            <h2>{item.title}</h2>
            <p>{item.description.substring(0, 50)}</p>
            <p>{item.rating}</p>
            <div>
              <span>
                {item.quantity}*{item.price}
              </span>
              ={item.quantity * item.price}
            </div>
          </div>
          <div
            className="delete display-3"
            onClick={() => dispatch(removeItem(item.id))}
          >
            <DeleteForeverIcon />
          </div>
        </div>
      ))}
      <div className="total">
        <span className="fw-bolder">SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className="btn btn-primary mx-4 fw-bold">
        PROCEED TO CHECKOUT
      </button>
      <span
        className="btn btn-danger mx-4 fw-bold"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
