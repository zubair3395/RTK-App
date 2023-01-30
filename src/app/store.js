import { configureStore } from '@reduxjs/toolkit';
import countSlice from '../Features/countSlice';
export default configureStore({
  reducer: {
         ShoppingStore: countSlice,
  },
})
