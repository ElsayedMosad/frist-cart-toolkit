import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCard: (state, action) => {
      // console.log(state);
      // let obj = state.every((p) => p.id !== action.payload.id);
      // if (obj) {
      //   state.push(action.payload);
      // }
      let findProduct = state.find((p) => p.id === action.payload.id);

      if (findProduct) {
        findProduct.count += 1;
      } else {
        let productClone = { ...action.payload, count: 1 };
        state.push(productClone);
      }
    },
    increaseCount: (state, action) => {
      state.map((p) => {
        if (p.id === action.payload.id) {
          p.count++;
          return p;
        } else {
          return p;
        }
      });
    },
    decreaseCount: (state, action) => {
      console.log(state);
      console.log(action);
      state.map((p) => {
        if (p.id === action.payload.id && action.payload.count !== 1) {
          p.count--;
          return p;
        } else {
          return p;
        }
      });
    },
    deleteFromCard: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const {
  addToCard,
  deleteFromCard,
  clear,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;
export default cartSlice.reducer;
