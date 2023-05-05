import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      if (window.confirm('вы действительно хотите удалить мороженку?'))
        state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearCart(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
    addMinusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },
  },
});

export const { addItem, removeItem, clearCart, addMinusItem } = cartSlice.actions;

export default cartSlice.reducer;
