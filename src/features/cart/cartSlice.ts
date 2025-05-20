import { toast } from 'react-toastify';

import {
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import type {
  CartItem,
  Product,
} from '../../types';

interface CartState {
  items: CartItem[];
}
//should get the local storage item becuase if the product is in local storage then it will show
const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        toast.error('Item already in cart.');
      } else {
        state.items.push({ ...action.payload, qty: 1 });
        toast.success('Item added to cart!');
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    updateQty(state, action: PayloadAction<{ id: number; qty: number }>) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.qty = action.payload.qty;
        localStorage.setItem('cart', JSON.stringify(state.items));
        // toast.info(`Quantity updated to ${action.payload.qty}`);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
      toast.warn('Item removed from cart.');
    },
  },
});

export const { addToCart, updateQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;