import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts,toggleSideBar} from "../store/products.jsx";
import {Star} from "lucide-react";
import {addToCart} from "../store/Cart.jsx";

const ProductCard = ({products}) => {

   const dispatch = useDispatch();

  const displayProducts = products.map(product => {
      const productStars = Array.from({length : 5},(_,index) => {
          return (
              <Star key = {index} className = {`w-4 h-4 ${index < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}/>
          )

      })
      return (
          <div className = "group bg-white rounded-2xl shadow-md hover:shadow-2xl transtion-all duration-300 overflow-hidden
        border border-gray-100" key = {product.id}>
              <div className = "relative overflow-hidden">
                  <img src = {product.image} className = "w-full h-64 object-cover group-hover:scale-110
                 transition-all duration-500"/>
                  <div className = "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                     <span className = "absolute top-4 left-4 bg-white/90
                     backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{product.category}</span>
                  </div>
              </div>
              <div className = "p-6">
                  <h3 className = "font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                  <p className = "text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className = "flex items-center mb-4 gap-[16px]">
                      <div className = "flex items-center">{productStars}</div>
                      <span className = "flex items-center">
                         {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className = "flex items-center justify-between ">
                    <span className = "text-2xl font-bold text-gray-900">
                        ${product.price}
                    </span>
                      <button className = "group/btn bg-gray-200 text-gray-900 px-4 py-2 rounded-lg
                    hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center
                    space-x-2 cursor-pointer"
                      onClick = {() => dispatch(addToCart(product))}>
                          <span className = "font-medium">Add to Cart</span>
                      </button>
                  </div>
              </div>
          </div>
      )
  })

    return (

        displayProducts
    )
}

export default ProductCard;