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
      const res= state.data.find(post => post.id === data.payload.id)
      if(!res){
        state.data= [...state.data, data.payload]
        state.TotalPrice= state.TotalPrice+data.payload.price
      } 
    },
    removeCart: (state, action)=>{
       const itemId= (action.payload.id);
       state.data= state.data.filter((items)=> items.id!==itemId)
       state.TotalPrice= state.TotalPrice-(action.payload.price*action.payload.quantity)
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
    },
    checkout: (state)=>{
      state.data= [];
      state.TotalPrice=0;
    }
  },
})

export const { AddToCart, removeCart, incrementQuantity, decrementQuantity, checkout } = counterSlice.actions

export default counterSlice.reducer