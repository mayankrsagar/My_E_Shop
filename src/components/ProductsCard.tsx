import './ProductCard.css';

import React from 'react';

import { useNavigate } from 'react-router-dom';

import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div  className="product-card" onClick={()=>navigate(`products/${product.id}`)}>
      <img
        className="product-card_image"
        src={product.image}
        alt={product.title}
      />
      <div className="product-card_body">
        <h3 className="product-card_title">{product.title}</h3>
        <p className="product-card_price">₹{product.price.toFixed(2)}</p>
        <p className="product-card_rating">
          ⭐ {product.rating.rate} ({product.rating.count})
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
