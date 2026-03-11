import React from "react";

const Productcard = ({ product }) => {
  return (
    <div className="card shadow-sm p-3">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <h5 className="mt-2">{product.name}</h5>

      <p>Category: {product.category}</p>

      <h6>₹{product.price}</h6>

      <button className="btn btn-primary w-100">
        Add to Cart
      </button>
    </div>
  );
};

export default Productcard;