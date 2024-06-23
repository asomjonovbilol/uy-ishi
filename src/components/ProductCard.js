import React from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  const products = [
    { id: 1, title: 'Product 1', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Product 2', image: 'path/to/image2.jpg' },
    // More products
  ];

  return (
    <div className="home">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
