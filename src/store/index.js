import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../features/Counter/CounterSlice'
import shopSlice from '../features/shop/ShopSlice'

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    shop: shopSlice,
  },
})