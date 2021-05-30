import { configureStore } from '@reduxjs/toolkit'

import businessesReducer from './Business'

export default configureStore({
  reducer: {
    businesses: businessesReducer
  }
})