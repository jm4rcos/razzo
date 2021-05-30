import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const addCurrentId = createAction('ADD_CURRENT_ID')
export const addCurrent = createAction('ADD_CURRENT')

export default createReducer(INITIAL_STATE, {
  [addCurrentId.type]: (state, action) => [...state, action.payload],
  [addCurrent.type]: (state, action) => [...action.payload]
})