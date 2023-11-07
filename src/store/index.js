import { configureStore } from '@reduxjs/toolkit'
import { shopApi } from '../services/shopApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import shopSlice from '../features/shop/ShopSlice'
import { cartSlice } from '../features/Cart/CartSlice'

const store = configureStore({
  reducer: {
    shop: shopSlice,
    cart: cartSlice,
    [shopApi.reducerPath]: shopApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)

export default store