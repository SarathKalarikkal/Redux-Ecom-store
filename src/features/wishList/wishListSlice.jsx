import { createSlice } from '@reduxjs/toolkit'

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    wishList :  JSON.parse(localStorage.getItem('wishList')) || []
  },

  reducers: {
       addToWishList : (state, action)=>{
        state.wishList.push(action.payload)

        localStorage.setItem('wishList', JSON.stringify(state.wishList))
       },
       removeFromWishList : (state, action)=>{
        state.wishList = state.wishList.filter((item)=>item.id !== action.payload.id)
        localStorage.setItem('wishList', JSON.stringify(state.wishList))
       },
  }
})


export const {addToWishList,  removeFromWishList} = wishListSlice.actions

export default wishListSlice.reducer