import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function SingleProduct() {

    const { productId } = useParams()



    const [singleProduct, setSingleProduct] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {

            const singleProductResponse = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setSingleProduct(singleProductResponse.data);
    
    
            const categoryForApi = singleProduct.category === "men's clothing" ? "men%27s%20clothing" :
            singleProduct.category === "womens's clothing" ? "women%27s%20clothing" :
            singleProduct.category;

            const similarProductsResponse = await axios.get(`https://fakestoreapi.com/products/category/${categoryForApi}?limit=4`);
            
            setProducts(similarProductsResponse.data);
          } catch (error) {
            console.error("Failed to fetch product details:", error);
          }
        };
    
        fetchData();
      }, [productId, singleProduct, products]);

     const dispatch = useDispatch()
console.log("the singleProduct", singleProduct)

    return (
        <>
            <main>
                
                <section id="single-product-Sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {
                                    <div className="product-main-wrapper">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-product-image">
                                                <img src={singleProduct.image} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 my-auto">
                                            <div className="single-product-content p-4">
                                                <h3>{singleProduct.title}</h3>
                                                <div className="stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-half" />
                                                </div>
                                                <div className="price-box">
                                                    <span>₹ {singleProduct.price}</span>
                                                    <strike>₹ 1700</strike>
                                                </div>
                                                <p className='product-des'>
                                                    {singleProduct.description}
                                                </p>
                                                <div className="buttons d-flex gap-2">
                                                    <button className="hero-btn" onClick={()=>dispatch(addToCart(singleProduct))}>
                                                        <i className="bi bi-cart-plus" /> Add to Cart
                                                    </button>
                                                    <button className="share">
                                                        <i className="bi bi-box-arrow-up-right" /> Share
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                  


                                </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 similar-sec'>
                        <div className="row">
                            <div className="col-12 text-center py-4 similar-products-head">
                                <h2 className="display-6">Similar Products</h2>
                                <p className="fw-light">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque
                                    exercitationem
                                </p>
                            </div>
                        </div>
                        <div className="row px-1 px-lg-5 g-3">
                            {products.length > 1 &&
                                products.map((product) => {
                                  return(
                                    <Product product={product} />
                                  )  
                                })
                            }
                        </div>


                    </div>
                </section>
            </main>

        </>
    )
}

export default SingleProduct