import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import { removeFromWishList } from '../features/wishList/wishListSlice'
import { Link } from 'react-router-dom'

function WishList() {

  const wishListItems = useSelector(state => state.wishList.wishList)

  console.log("wishListItems",wishListItems )

  const dispatch = useDispatch()


  return (
    <>
     <section className='wishList-banner'>
            <div className="container">
            <h1>WishList</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, accusantium!</p>
            </div>
     </section>
     
      <section className='wishlist-sec'>
        <div className="container">
          <div className="row">
            <div className="col-12">

              {
                wishListItems.length === 0 ? (
                  <div className='emptyCart'>
                  <div>
                  <i className="bi bi-bag-heart"></i>
                    <h2>Your Wishlist is Empty</h2>
                  </div>
                  <p>Please add some products</p>
              </div>
                ):
                (
                  <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="cart-list">
                      {
                        wishListItems && wishListItems.map((item)=>{
                          return (
                            <tr>
                            <td className="product-thumbnail">
                              <Link to={`/shop/${item.id}`}>
                              <img
                                src={item.image}
                                alt="Image"
                              />
                              </Link>
                            </td>
                            <td className="product-name">
                              <span className="text-black">{item.title}</span>
                            </td>
                            <td><span className='price'> ₹ {item.price}</span></td>
                            
                           
                            <td>
                               <div className='actionWrap'>
                               <button className='hero-btn' onClick={()=>dispatch(addToCart(item))}>
                                <span>Add to Cart</span>
                                <i class="bi bi-bag-check"></i>
                                </button>
                               <button className='hero-btn blue' onClick={()=>dispatch(removeFromWishList(item))}>
                                <span>Remove</span>
                                <i class="bi bi-x-circle"></i>
                                </button>
                               </div>
                            </td>
                          </tr>
                          )
                        })
                      }
                      
                    </tbody>
                  </table>
                </div>
                )
              }
             

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default WishList