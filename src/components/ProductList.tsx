import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const productList = await fetchProducts();
      setProducts(productList);
    };

    fetchProductData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
