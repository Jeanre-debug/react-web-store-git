import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  shippingMethod: 'standard', // 'standard', 'express', 'nextDay'
  shippingCost: 5.99, // Default shipping cost
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity = Math.max(1, quantity); // Ensure quantity is at least 1
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    setShippingMethod: (state, action) => {
      const method = action.payload;
      state.shippingMethod = method;
      
      // Update shipping cost based on method
      switch (method) {
        case 'express':
          state.shippingCost = 12.99;
          break;
        case 'nextDay':
          state.shippingCost = 24.99;
          break;
        default: // standard
          state.shippingCost = 5.99;
      }
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart,
  setShippingMethod
} = cartSlice.actions;

export const selectCartItems = state => state.cart.items;
export const selectCartTotal = state => 
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectShippingCost = state => state.cart.shippingCost;
export const selectOrderTotal = state => 
  selectCartTotal(state) + state.cart.shippingCost;

export default cartSlice.reducer;