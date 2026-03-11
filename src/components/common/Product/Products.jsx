import React from "react";

import productList from "./ProductList";
import ProductCard from "./Productcard";

const Products = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {productList.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;