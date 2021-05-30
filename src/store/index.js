import { configureStore } from '@reduxjs/toolkit'

import businessesReducer from './Business'
import productsReducer from './Products'
import currentIdReducer from './BusinessId'
import cartReducer from './Cart'

export default configureStore({
  reducer: {
    businesses: businessesReducer,
    products: productsReducer,
    currentId: currentIdReducer,
    cart: cartReducer
  }
})