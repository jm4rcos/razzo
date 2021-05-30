import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const addBusinesses = createAction('ADD_BUSINESSES')
export const addBusiness = createAction('ADD_BUSINESS')

export default createReducer(INITIAL_STATE, {
  [addBusinesses.type]: (state, action) => [...state, action.payload],
  [addBusiness.type]: (state, action) => [...action.payload],
})