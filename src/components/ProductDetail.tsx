import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import '../styles/ProductDetail.scss';
 const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      const productData = await fetchProductById(Number(id));
      setProduct(productData);
    };

    fetchProductData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <div className="product-image">
        <img
          src={product.imageSrc}
          alt="Product Image"
          className="product-image-small"
        />
        <div className="product-image-zoom">
          <img src={product.imageSrc} alt="Product Image" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
