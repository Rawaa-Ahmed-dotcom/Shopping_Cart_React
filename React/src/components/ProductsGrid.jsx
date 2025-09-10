import {useEffect} from "react";
import ProductCard from "./ProductCard.jsx";
import {useSelector,useDispatch} from "react-redux";
import {getProducts} from "../store/products.jsx";
const ProductsGrid = () => {
    const {products,isLoading,error,isSideBarOpen} = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());

    },[dispatch]);
    return(
        <div className = "w-full py-12">
            <div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className = "text-center mb-12">
                    <h2 className = "text-4xl font-black text-gray-900 mb-4">Features Products</h2>
                    <p className = "text-lg text-gray-600">
                        Discover our Exclusive range of products designed to enhance your lifestylecd
                    </p>
                </div>
                {products.length === 0 ? (
                   <div className = "flex items-center justify-center w-full min-h-screen flex-col">
                    <div className = "w-48 h-48 border-4 border-blue-500 border-t-transparent rounded-full animate-spin">

                    </div>
                    <span>Loading...</span>
                    </div>

                ) :
                    <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProductCard products = {products}/>
                    </div>
                }


            </div>
        </div>
    )
}

export default ProductsGrid;