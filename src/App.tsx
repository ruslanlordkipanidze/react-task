import React from 'react';
import ProductList from './components/ProductList';
import FixedColumn from './components/FixedColumn';
import ProductDetail from './components/ProductDetail';

const App: React.FC = () => {
  // Fetch likedProducts data here if needed
  const likedProducts = /* Fetch likedProducts from API or state */;

  return (
    <div>
      <ProductList />
      <FixedColumn likedProducts={likedProducts} />
      <ProductDetail />
    </div>
  );
};

export default App;
