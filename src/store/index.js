import { configureStore } from '@reduxjs/toolkit'
import { shopApi } from '../services/shopApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import shopSlice from '../features/shop/ShopSlice'

const store = configureStore({
  reducer: {
    shop: shopSlice,
    [shopApi.reducerPath]: shopApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)

export default store