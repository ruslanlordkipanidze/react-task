// Favorites.tsx
import React from 'react';

interface Product {
  id: number;
  name: string;
}

interface FavoritesProps {
  likedProducts: Product[];
}

const Favorites: React.FC<FavoritesProps> = ({ likedProducts }) => {
  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {likedProducts.map((product: Product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
