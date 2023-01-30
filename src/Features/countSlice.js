import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'ShoppingStore',
  initialState: {
    value: 0,
    data: [],
    TotalPrice: 0,
    sub_price:0
  },
  reducers: {
    AddToCart: (state, data) => {
      state.data= [...state.data, data.payload]
      state.TotalPrice= state.TotalPrice+data.payload.price
    },
    removeCart: (state, action)=>{
       const itemId= (action.payload);
       state.data= state.data.filter((items)=> items.id!==itemId)
    },
    incrementQuantity: (state, action)=>{
      state.data[action.payload].quantity+=1
      state.TotalPrice= state.TotalPrice+state.data[action.payload].price
    },
    decrementQuantity: (state, action)=>{
    if(state.data[action.payload].quantity>0){
      state.data[action.payload].quantity-=1
        state.TotalPrice= state.TotalPrice-state.data[action.payload].price
    }
    }
  },
})

export const { AddToCart, removeCart, incrementQuantity, decrementQuantity } = counterSlice.actions

export default counterSlice.reducer