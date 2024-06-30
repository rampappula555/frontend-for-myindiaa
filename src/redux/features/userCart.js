import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  userId: "",
  cart: [],
  wishlist: [],
};
const userCartSlice = createSlice({
  name: "userCartSlice",
  initialState,
  reducers: {
    createCart(state, action) {
      state.userId = action.payload.userId;
    },
    updateCart: (state, action) => {
      const item = state.cart.find((each) => each.id === action.payload.id);
      if (item) {
        item.count = item.count + action.payload.count || 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    updateWishlist: (state, action) => {
      const item = state.wishlist.find((each) => each.id === action.payload.id);
      if (!item) {
        state.wishlist.push(action.payload);
      }
    },
    deleteCart: (state, action) => {
      const index = state.cart.findIndex(
        (each) => each.id === action.payload.id
      );
      if (state.cart[index].count === 0) state.cart.splice(index, 1);
      state.cart[index].count--;
    },
    deleteWishlist: (state, action) => {
      const index = state.wishlist.findIndex(
        (each) => each.id === action.payload.id
      );
      state.wishlist.splice(index, 1);
    },
    moveWishListToCart(state, action) {
      for (let i = 0; i < action.payload.cartItems; i++) {
        const item = state.cart.find(
          (each) => each.id === action.payload.cartItems[i].id
        );
        if (!item) {
          state.cart.push(action.payload.cartItems[i]);
        }
        ++item.count;
      }
    },
    deleteAllItemsInCart(state) {
      state.cart = [];
    },
    deleteItemFromCart(state, action) {
      const index = state.cart.findIndex(
        (eachItem) => eachItem.id !== action.payload.id
      );
      state.cart.splice(index, 1);
    },
  },
});
export const {
  deleteItemFromCart,
  deleteAllItemsInCart,
  createCart,
  updateCart,
  updateWishlist,
  deleteCart,
  deleteWishlist,
} = userCartSlice.actions;
export default userCartSlice.reducer;
