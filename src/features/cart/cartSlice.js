import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      //   const item = state.cart.find((i) => i.pizzaId === action.payload.id);

      //   if (item) {
      //     item.quantity++;
      //     state.totalPrice += action.payload.price;
      //     return;
      //   }

      //   state.totalPrice += action.payload.price;
      //   state.cart.push({ ...action.payload, quantity: 1 });
      //   return;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((c) => c.pizzaId !== action.payload.id);
      //   const itemIndex = state.cart.findIndex((i) => i.pizzaId === action.payload.id);
      //   if (itemIndex === -1) return;
      //   state.totalPrice -= state.cart[itemIndex].price * state.cart[itemIndex].quantity;
      //   state.cart.splice(itemIndex, 1);
      //   if (state.cart.length === 0) state.totalPrice = 0;
      //   return;
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((i) => i.pizzaId === action.payload.id);
      if (item) {
        item.quantity++;
        state.totalPrice += action.payload.price;
        return;
      }
      state.totalPrice += action.payload.price;
      state.cart.push({ ...action.payload, quantity: 1 });
      return;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((i) => i.pizzaId === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalPrice -= action.payload.price;
        return;
      }
      const itemIndex = state.cart.findIndex(
        (i) => i.pizzaId === action.payload.id
      );
      if (itemIndex === -1) return;
      state.totalPrice -= state.cart[itemIndex].price;
      state.cart.splice(itemIndex, 1);
      if (state.cart.length === 0) state.totalPrice = 0;
      return;
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.action;

export default cartSlice.reducer;

export const getCart  (state) => state.cart.cart;

export const getTotalCartQuantity = (state) => state.cart.reduce(sum, item => sum + item.quantity, 0);

export const getTotalPrice = (state) => state.cart.reduce(sum, item => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) => state.cart.find(item => item.pizzaId  === id)?.quantity ?? 0;