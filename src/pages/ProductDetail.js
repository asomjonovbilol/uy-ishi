import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  // Fetch product details based on the id

  return (
    <div className="product-details">
      <h1>Product Details for {id}</h1>
      {/* Display product details */}
    </div>
  );
}

export default ProductDetails;
