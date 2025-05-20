import './ProductDetail.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchProductById } from '../api/products';
import { addToCart } from '../features/cart/cartSlice';
import type { Product } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const loadDetail = async () => {
      try {
        if (id) {
          const data = await fetchProductById(Number(id));
          setProduct(data);
        }
      } catch {
        setError('Could not load product details.');
      } finally {
        setLoading(false);
      }
    };
    loadDetail();
  }, [id]);

  const handleAdd = () => {
    if (product) dispatch(addToCart(product));
  };

  if (loading) return <p className="center">Loading product…</p>;
  if (error)   return <p className="center error">{error}</p>;
  if (!product) return <p className="center">No product to display.</p>;

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img
          className="product-detail__image"
          src={product.image}
          alt={product.title}
        />
        <div className="product-detail__info">
          <h2>{product.title}</h2>
          <p className="price">₹{product.price.toFixed(2)}</p>
          <p className="rating">
            ⭐ {product.rating.rate} ({product.rating.count})
          </p>
          <p className="description">{product.description}</p>
          <div className="actions">
            <button className="btn" onClick={handleAdd}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

