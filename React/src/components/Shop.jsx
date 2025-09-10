import {useState} from "react";
import Header from './Header';
import ProductsGrid from "./ProductsGrid.jsx";
import CartSideBar from "./CartSideBar.jsx";
const Shop = () => {

    return (
        <div className = "min-h-screen w-full flex flex-col  items-center">
            <Header/>
           <ProductsGrid/>
            <CartSideBar/>
        </div>
    )
}

export default Shop;