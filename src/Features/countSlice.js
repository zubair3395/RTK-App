import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'ShoppingStore',
  initialState: {
    data: []
  },
  reducers: {
    AddToCart: (state, data) => {
      return{ ...state,
       data: [...state.data, data.payload]
      }
    },
    // decrement: (state) => {
    //     if(state.value>0){
    //         state.value -= 1
    //     }
      
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const { AddToCart } = counterSlice.actions

export default counterSlice.reducer