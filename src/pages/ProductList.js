import React from "react";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="filter-cat">
          <label htmlFor="cat">
            <h3>choice category</h3>
          </label>
          <select class="form-select" id="cat">
            <option selected>All category</option>
            <option value="Des">Des</option>
            <option value="shirt">shirt</option>
            <option value="short">short</option>
          </select>
        </div>
      </div>
      <Products />
    </>
  );
};

export default ProductList;
