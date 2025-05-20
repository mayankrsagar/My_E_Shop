import './CartPage.css';

import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  removeFromCart,
  updateQty,
} from '../features/cart/cartSlice';
import type { RootState } from '../store/store';
import type { CartItem } from '../types';

const CartPage: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleQtyChange = (id: number, qty: number) => {
    if (qty < 1) return;
    dispatch(updateQty({ id, qty }));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (items.length === 0) return <p className="center">Your cart is empty.</p>;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-list">
        {items.map((item: CartItem) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item__image"
            />
            <div className="cart-item__details">
              <h3>{item.title}</h3>
              <p>₹{item.price.toFixed(2)}</p>
              <div className="cart-item__controls">
                <button
                  onClick={() => handleQtyChange(item.id, item.qty - 1)}
                  disabled={item.qty === 1}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button onClick={() => handleQtyChange(item.id, item.qty + 1)}>
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ₹{total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartPage;