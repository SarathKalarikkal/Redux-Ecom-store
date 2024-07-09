import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart  } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromWishList } from '../features/wishList/wishListSlice';


function Product({ product }) {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cart); 
  const wishListItems = useSelector((state) => state.wishList.wishList); 

  const [isInCart, setIsInCart] = useState(false)
  const [isInFav, setIsInFav] = useState(false)

  useEffect(() => {
    const checkIfInCart = cartItems.some(item => item.id === product.id);
    setIsInCart(checkIfInCart);
   
    const checkIfInWishList = wishListItems.some(item => item.id === product.id);
    setIsInFav(checkIfInWishList);

  }, [cartItems,wishListItems, product.id]); 

  const handleChange = () => {
    if (isInCart) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleChangeForFav =()=>{
    if (isInFav) {
      dispatch(removeFromWishList(product));
    } else {
      dispatch(addToWishList(product));
    }
  }

  return (
    <div className='col-12 col-md-4 col-lg-3' data-aos="fade-up">
     
       <div className="product-card" key={product.id}>
                  <div className={`product-buttons ${isInFav || isInCart ? 'active' : ''}`}>
                    <i className={`bi bi-heart-fill ${isInFav ? 'active' : ''}`} onClick={handleChangeForFav} />
                    <i className={`bi bi-cart-fill ${isInCart ? 'active' : ''}`} onClick={handleChange} />
                  </div>
                  <div>
                  <Link to={`/shop/${product.id}`}>
                    <img src={product.image} alt="" />
                    </Link>
                  </div>
                  <div className="pro-name-price">
                    <h6>{product.title}</h6>
                    <span className="price">₹ {product.price}</span>
                  </div>
                  <div className="stars">
                    <i className="bi bi-star" />
                    <i className="bi bi-star" />
                    <i className="bi bi-star" />
                    <i className="bi bi-star" />
                    <i className="bi bi-star" />
                  </div>
       </div>
      
    </div>

  )
}

export default Product