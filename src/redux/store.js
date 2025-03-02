import {configureStore} from '@reduxjs/toolkit';
import { cartReducer } from './reducers';
import productReducer from './productSlice';

const store=configureStore({
    reducer:{
        cart:cartReducer,
        products: productReducer,
    },
});

export default store;
