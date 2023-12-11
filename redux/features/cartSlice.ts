import { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface Item {
  id: number;
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
    resetCart: (state) => {
      state.cartArray = [];
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const updatedCartArray = state.cartArray.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      state.cartArray = updatedCartArray;
    },
  }
})

export const { addToCart, removeFromCart, resetCart, updateCartItemQuantity } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cartArray

export default cartSlice.reducer