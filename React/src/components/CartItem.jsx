import {Minus, Plus, Trash} from "lucide-react";
import {useDispatch} from "react-redux";
import {removeFromCart, updateQuantity} from "../store/Cart.jsx";
const CartItem = ({item}) => {
    const dispatch = useDispatch();
    console.log(item);
    const totalPrice = (item.quantity * item.price).toFixed(2);
    return (
        <div className = "flex items-center space-x-4 bg-gray-50 rounded-xl ">
           <img src = {item.image} className = "w-16 h-16 object-cover rounded-lg"/>
            <div className = "flex-1 min-w-0 ">
               <h4 className = "font-medium text-gray-900 truncate">{item.name}</h4>
                <p>{item.price}</p>
            </div>
            <div className = "flex items-center space-x-2">
                <button className = "p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200
                cursor-pointer" onClick = {() => dispatch(updateQuantity({operation : "decrement",cartItem : item}))}>
                    <Minus className = "w-4 h-4"/>
                </button>
                <span className = "w-8 text-center font-medium">{item.quantity}</span>
                <button className = "p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200
                cursor-pointer" onClick = {() => dispatch(updateQuantity({operation : "increment",cartItem : item}))}>
                    <Plus className = "w-4 h-4" />
                </button>
            </div>
            <div className="flex items-center space-x-2">
                 <span className = "font-bold text-gray">{totalPrice}</span>
                <button className = "p-1 text-red-500 rounded-full hover:bg-red-50 transition-colors duration-200
                cursor-pointer"
                onClick = {() => dispatch(removeFromCart(item))}>
                    <Trash className="w-4 h-4"/>
                </button>
            </div>
        </div>
    )
}


export default CartItem;