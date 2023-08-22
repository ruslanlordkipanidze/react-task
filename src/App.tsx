import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
 

interface Product {
   id: number;
  name: string;
 }

const App: React.FC = () => {
  // Initialize state for likedProducts
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

   useEffect(() => {
   
    const fetchLikedProducts = async () => {
      try {
         const response = await fetch('your-api-url-here');
        const data = await response.json();

         setLikedProducts(data);
      } catch (error) {
        console.error('Error fetching likedProducts:', error);
      }
    };

    fetchLikedProducts();  
  }, []);  
  return (
    <div>
      <ProductList />
      
    </div>
  );
};

export default App;
