import { configureStore } from "@reduxjs/toolkit";
import userCartReducer from "../redux/features/userCart";
const store = configureStore({
  reducer: {
    userCart: userCartReducer,
  },
});
export default store;
