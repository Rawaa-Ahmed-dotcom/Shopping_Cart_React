import {CreditCard, ShoppingBag, X} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {toggleSideBar} from "../store/products.jsx";
import CartItem from "./CartItem.jsx";
import {clearCart} from "../store/Cart.jsx";
const CartSideBar = () => {
    const dispatch = useDispatch();
    const {isSideBarOpen} = useSelector(state => state.products);
    const {items} = useSelector(state => state.cart);
    const totalItems = items.reduce((total,item) => total + item.quantity, 0);
    const totalPrice = items.reduce((total,item) => total + item.quantity * item.price, 0).toFixed(2);

    return (
        <>

                {/* Backdrop */}
                <div className = {`fixed top-0 left-0 w-[75%] min-h-screen  inset bg-black/50 backdrop-blur-sm z-50 transition-all duration-300 ${isSideBarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

                </div>
                {/*    Sidebar*/}
                <div className = {`fixed right-0 top-0 min-h-screen w-[25%] bg-white shadow-2xl z-50 transform transition-transform
            duration-300 ease-in-out ${isSideBarOpen ? "translate-x-0 " : "translate-x-[100%]"}`}>
                    {/* Header */}
                    <div className = "flex items-center justify-between p-6 border-b
                border-gray-200">
                        <h2 className = "text-xl font-bold text-gray-900 flex items-center space-x-2">
                            <ShoppingBag className = "w-6 h-6"/>
                            <span>Shopping Cart</span>
                        </h2>
                        <button className = "p-2 hover:bg-gray-100 transition-colors rounded-full duration-200 cursor-pointer "
                        onClick = {() => {dispatch(toggleSideBar())}}>
                            <X className = "w-6 h-6"/>
                        </button>
                    </div>
                    {/*Cart Items*/}
                    <div className = "flex-1 overflow-y-auto p-6 ">
                        {items.length === 0 ?
                            <div className = "text-center py-12">
                                <ShoppingBag className = "w-16 h-16 text-gray-300 mx-auto mb-4"/>
                                <p className = "text-gray-500 text-lg mb-2">Your Cart is Empty</p>
                                <p className = "text-gray-400 text-sm">Add Some Products to Get Started</p>
                            </div> :
                        <div className = "space-y-4">
                            {items.map((item) => {
                                return (
                                    <CartItem  key = {item.id} item = {item}/>
                                )
                            })}
                        </div>}
                    </div>
                    {/*    footer*/}
                    {items.length &&  <div className = "border-t border-gray-200 p-6 bg-gray-50 ">
                        <div className = "flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold text-gray-900">Total</span>
                            <span className="text-2xl font-bold text-gray-900">${totalPrice}</span>
                        </div>
                        <div className = "space-y-3 flex flex-col gap-4">
                            <button className = "w-full bg-gray-600 text-white py-3 rounded-lg
                        font-medium flex items-center justify-center space-x-2 hover:bg-gray-700 transition-all
                        duration-200 hover:scale-105 cursor-pointer">
                                <CreditCard className = "w-5"/>
                                <span>Proceed To Checkout </span>
                            </button>
                            <button className = "w-full bg-gray-200 text-gray-700 py-3 rounded-lg
                        font-medium flex items-center justify-center space-x-2 transition-all
                        duration-200 hover:scale-105 cursor-pointer"
                                    onClick = {() => dispatch(clearCart())}>

                                <span>Clear Cart</span>
                            </button>
                        </div>
                    </div>}
                </div>

        </>
    )
  }


  export default CartSideBar;