import React, { useEffect, useState } from "react";
import ProductCard from "./Productcard";

const FetchProducts = () => {

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 className="text-center mt-5">Loading Products...</h3>;
  }

  return (
    <div className="container mt-4">
      <div className="row">

        {productData.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}

      </div>
    </div>
  );
};

export default FetchProducts;