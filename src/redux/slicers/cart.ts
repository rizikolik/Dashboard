import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';


// Define a type for the slice state
interface Item {
  price: number;
  name: string;
  count: number;
}
interface CartState {
  items: Item[] ;
  total: number;
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items = [...state.items, action.payload];
    },
    increaseItem: (state, action: PayloadAction<Item>) => {
      state.items = [...state.items, action.payload];
    },
    decreaseItem: (state, action: PayloadAction<Item>) => {
      state.items = [...state.items, action.payload];
    },

    removeItem: (state, action: PayloadAction<Item>) => {
      const newItems = state.items.filter((item) => item !== action.payload);
      state.items = newItems;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<Item>) => {
      state.items = [...state.items, action.payload];
    },
  },
});
// Other code such as selectors can use the imported `RootState` type

export const {
  addItem,
  increaseItem,
  decreaseItem,
  removeItem,
  incrementByAmount,
} = cartSlice.actions;

export const selectCount = (state: RootState) =>
state.cart?.items?.reduce((previousValue: number, currentValue: Item): number  => {
  return previousValue + currentValue.count;
}, 0);
export const selectItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
