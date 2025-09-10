import {configureStore} from "@reduxjs/toolkit";
import products from "./products.jsx";
import cart from "./Cart.jsx";
const store = configureStore({reducer : {products,cart}});

export default store;