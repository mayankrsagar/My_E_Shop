import './ProductList.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { useDispatch } from 'react-redux';

import { fetchProducts } from '../api/products';
import ProductCard from '../components/ProductsCard';
import { addToCart } from '../features/cart/cartSlice';
import type { Product } from '../types';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
 

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch {
        setError('Failed to load products.');
      }
    };
    load();
  }, []);

  if (error) return <p className="center error">{error}</p>;

  return (
    <div className="product-list-container">
      {products.map((item) => (
        <div key={item.id} className="product-list__item">
          <ProductCard product={item} />
          <button
            className="btn btn--add"
            onClick={() => dispatch(addToCart(item))}
          >
            + Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;