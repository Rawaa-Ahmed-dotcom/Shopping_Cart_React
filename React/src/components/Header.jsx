import {ShoppingCart} from "lucide-react";
import {toggleSideBar} from "../store/products.jsx";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const {items} = useSelector(state => state.cart);

    const selectTotalItems = () => {
       const total =  items.reduce((total,item) => total + item.quantity , 0);
       return total;
    }
    const totalItems = selectTotalItems();
    return (
        <div className = " shadow-lg w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40 py-2">
        <div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className = "flex items-center h-16 justify-between">
                <h2 className = "text-gray-900 text-bold text-4xl">eCart</h2>
                <div className = "">
                    <input type = "search" placeholder="Search Product" className = "bg-gray-300  p-3 w-2xl rounded-md focus:outline-none focus:ring-2"/>
                </div>
                <button className = "relative bg-gray-300 text-gray-900 hover:shadow-lg transition duration-200 hover:scale-105 rounded-full flex items-center justify-center cursor-pointer p-2">
                    <ShoppingCart className = "w-6 h-6" onClick = {() => dispatch(toggleSideBar())}/>
                    {totalItems > 0 && <span className = "absolute top-1 right-0 bg-red-500 text-white text-xs font-semibold rounded-full
                    w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">{totalItems}</span>}

                </button>
            </div>
        </div>
        </div>
    )
}

export default Header;