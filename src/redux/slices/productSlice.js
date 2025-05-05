import { createSlice } from '@reduxjs/toolkit';
import { productsData } from '../../data/products';

const initialState = {
  products: productsData,
  filteredProducts: productsData,
  categories: [...new Set(productsData.map(product => product.category))],
  selectedCategory: 'all',
  searchTerm: '',
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;
      
      state.filteredProducts = state.selectedCategory === 'all'
        ? state.products.filter(product => 
            product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : state.products.filter(product => 
            product.category === state.selectedCategory &&
            product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
          );
    },
    searchProducts: (state, action) => {
      state.searchTerm = action.payload;
      
      state.filteredProducts = state.selectedCategory === 'all'
        ? state.products.filter(product => 
            product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : state.products.filter(product => 
            product.category === state.selectedCategory &&
            product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
          );
    },
  },
});

export const { filterByCategory, searchProducts } = productSlice.actions;
export default productSlice.reducer;