import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface Item {
  price: number;
  quantity: number;
  image: string;
  title: string
}
export interface CartState {
  cartArray: Item[],
}

// Define the initial state using that type
const initialState: CartState = {
  cartArray: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      state.cartArray.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
        state.cartArray.splice(action.payload, 1);
    },

  }
})

export const { addToCart, removeFromCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cartArray

export default cartSlice.reducer