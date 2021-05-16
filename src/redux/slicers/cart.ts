import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';

// Define a type for the slice state
export interface Item {
  price: number;
  name: string;
  count: number;
}
interface CartState {
  items: Item[];
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
      state.items = state.items.map((item: Item) => {
        if (item.name === action.payload.name) {
          item.count += 1;
          return item;
        } else return item;
      });
    },
    decreaseItem: (state, action: PayloadAction<Item>) => {
      state.items = state.items.map((item: Item) => {
        if (item.name === action.payload.name) {
          item.count -= 1;
          return item;
        } else return item;
      });
    },

    removeItem: (state, action: PayloadAction<Item>) => {
      const newItems = state.items.filter(
        (item: Item) => item.name !== action.payload.name
      );
      state.items = newItems;
    },
    resetCart: (state) => {
      return initialState;
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
  resetCart,
  incrementByAmount,
} = cartSlice.actions;

export const selectCount = (state: RootState) =>
  state.cart?.items?.reduce(
    (previousValue: number, currentValue: Item): number => {
      return previousValue + currentValue.count;
    },
    0
  );
export const selectTotalAmount = (state: RootState) =>
  state.cart?.items?.reduce(
    (previousValue: number, currentValue: Item): number => {
      return previousValue + currentValue.count * currentValue.price;
    },
    0
  );
export const selectItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
