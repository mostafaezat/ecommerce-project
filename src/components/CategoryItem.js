import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="card card-categories">
      <img className="card-img-top " src={item.img} alt={item.title} />
      <div className="card-body-categories">
        <h5 className="card-title-categories">{item.title}</h5>
        <Link className="btn btn-primary w-50" to="/cart">
          SHOW ME
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
