import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
}

interface ProductState {
  items: Product[];
  cart: Product[];
}

const initialState: ProductState = {
  items: [],
  cart: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
    addToCart(state, action: PayloadAction<Product>) {
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ id: number, quantity: number }>) {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { setProducts, addToCart, removeFromCart, updateQuantity } = productSlice.actions;
export default productSlice.reducer;
