import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import FixedColumn from './components/FixedColumn';
import ProductDetail from './components/ProductDetail';

interface Product {
  // Define your product properties here
  id: number;
  name: string;
  // ... other properties
}

const App: React.FC = () => {
  // Initialize state for likedProducts
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

  // Fetch likedProducts data from API or state
  useEffect(() => {
    // Replace this with actual fetch logic or state update
    // For example, fetching likedProducts from an API
    const fetchLikedProducts = async () => {
      try {
        // Fetch data from API
        const response = await fetch('your-api-url-here');
        const data = await response.json();

        // Update likedProducts state with fetched data
        setLikedProducts(data);
      } catch (error) {
        console.error('Error fetching likedProducts:', error);
      }
    };

    fetchLikedProducts(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <ProductList />
      
    </div>
  );
};

export default App;
