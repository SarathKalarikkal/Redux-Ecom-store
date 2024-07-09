import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItem, increaseItem, removeFromCart } from '../features/cart/cartSlice';

function Cart() {

const dispatch = useDispatch()

const cartItems = useSelector(state => state.cart.cart)
const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

console.log("cart items", cartItems);

  return (
    <>
      <section className="cart-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 py-4">
              <h1 className="text-center fs-1 fw-bold">
                <i className="bi bi-cart3" />
                CART
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="cart-wrapper container">
        {
          cartItems.length === 0 ? (
            <div className='emptyCart'>
                <div>
                  <i class="bi bi-minecart">
                  </i><h2>Your Cart is Empty</h2>
                </div>
                <p>Please add some products</p>
            </div>
          )
          :
          (
<section>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="cart-list">
                {
                  cartItems.map((item)=>{
                     return(
                      <tr>
                      <td className="product-thumbnail">
                        <img src={item.image} alt="Image" />
                      </td>
                      <td className="product-name">
                        <span className="text-black">
                         {item.title}
                        </span>
                      </td>
                      <td>₹ {item.price}</td>
                      <td>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button className="btn" type="button" onClick={()=>dispatch(decreaseItem(item.id))}>
                              −
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control text-center px-2"
                            value={item.quantity}
                          />
                          <div className="input-group-append">
                            <button className="btn" type="button" onClick={()=>dispatch(increaseItem(item.id))}>
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>₹ {item.total}</td>
                      <td>
                        <a href="#" className="btn btn-sm close-btn" onClick={()=>dispatch(removeFromCart({id : item.id}))}>
                          X
                        </a>
                      </td>
                    </tr>

                     )
                  })
                }
                
              </tbody>
            </table>
          </div>
          <div className="py-5">
            <div className="left-buttons">
              <button className="hero-btn">UPDATE CART</button>
              <button className="hero-btn">CONTINUE SHOPPING</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="cart-bottom">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-lg-6">
            <div className="left-side">
              <span className="cart-bottom-head">APPLY COUPON</span>
              <p>Enter the coupon code for offer</p>
              <div className="coupon-box">
                <input type="text" placeholder="Enter the code" />
                <button className="hero-btn">Apply</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="right-side">
              <span className="cart-bottom-head">CARD TOTALS</span>
              <div className="sub-content">
                <div>
                  <span>Sub Total</span>
                  <span>₹ {totalAmount}</span>
                </div>
                <div>
                  <span>Total</span>
                  <span>₹ {totalAmount}</span>
                </div>
              </div>
              <a className="hero-btn" href="checkout.html">
                PROCEED TO CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
          )
        }
  
</div>


    </>
  )
}

export default Cart