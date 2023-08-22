// FixedColumn.tsx
import React from 'react';
import Favorites from './Favorites';
import { Product } from '../services/types'; 

interface FixedColumnProps {
  likedProducts: Product[];
}

const FixedColumn: React.FC<FixedColumnProps> = ({ likedProducts }) => {
  return (
    <div className="fixed-column">
      <Favorites likedProducts={likedProducts} />
    </div>
  );
};

export default FixedColumn;
