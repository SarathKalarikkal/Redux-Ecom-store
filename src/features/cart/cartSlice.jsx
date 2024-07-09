import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    TotalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity++;
        state.cart[itemIndex].total = state.cart[itemIndex].price * state.cart[itemIndex].quantity;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      }

      localStorage.setItem('cart', JSON.stringify(state.cart)); 
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cart.splice(itemIndex, 1);
      }

      localStorage.setItem('cart', JSON.stringify(state.cart)); 
    },
    increaseItem: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity++;
        state.cart[itemIndex].total = state.cart[itemIndex].price * state.cart[itemIndex].quantity;
      }

      localStorage.setItem('cart', JSON.stringify(state.cart)); 
    },
    decreaseItem: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);

      if (itemIndex >= 0) {
        if (state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity--;
          state.cart[itemIndex].total = state.cart[itemIndex].price * state.cart[itemIndex].quantity;
        } else {
          state.cart.splice(itemIndex, 1);
        }
      }

      localStorage.setItem('cart', JSON.stringify(state.cart)); 
    },
  },
});

export const { addToCart, removeFromCart, increaseItem, decreaseItem } = cartSlice.actions;

export default cartSlice.reducer;