import React, { useEffect, useState } from 'react'
import heroImg from "../assets/home-banner.png"
import Product from '../components/Product'
import axios from 'axios';
import socialCare from "../assets/social-care.png"
import debitCard from "../assets/debit-card.png"
import freeShipping from "../assets/free-shipping.png"
import money from "../assets/money.png"


function Home() {

  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=8');
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>

    <div className=' hero-section'>
         <div className="container">
             <div className="row">
                  <div className="col-lg-6 my-auto" data-aos="fade-right">
                     <h1>Welcome to <span>ShopEase</span> <br /> Your <span>One-Stop</span> Online Store!</h1>
                     <p>Discover the best products at amazing prices!</p>
                     <div className="hero-btns d-flex gap-2">
                        <button className='btn '>Shop Now</button>
                        <button className='btn '>Learn More</button>
                     </div>
                  </div>
                  <div className="col-lg-6 my-auto" data-aos="fade-left">
                      <div className="hero-img" >
                          <img src={heroImg} alt="" />
                      </div>
                  </div>
             </div>
         </div>
    </div>

    {/* ---------------------Exclusive products--------------------------- */}
    <section id="exclusive-banner">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 ">
        <div className="exclusive-header-content" >
          <h2>Exclusive Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            itaque exercitationem
          </p>
        </div>
      </div>
    </div>
    <div className="row" >
      <ul className="d-flex align-items-center justify-content-center gap-2 gap-lg-5 py-4 list-unstyled">
        <li>
          <a href="#" className=" exclusive-links active">
            New Arrival
          </a>
        </li>
        <li>
          <a href="#" className="exclusive-links">
            Best Seller
          </a>
        </li>
        <li>
          <a href="#" className="exclusive-links">
            Featured
          </a>
        </li>
        <li>
          <a href="#" className="exclusive-links">
            Special Offer
          </a>
        </li>
      </ul>
    </div>
    <div className="row g-3"  >
      <div
        id="carouselExampleInterval"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item p-4">
            <div className="row g-3">
              {
                products.slice(0,4).map((product)=>{
                  return(
                        <Product key={product.id} product={product}/>
                  )
                })  
              }

            </div>
          </div>
          <div className="carousel-item p-4 active" >
            <div className="row g-3">
            {
                products.slice(4,8).map((product)=>{
                  return(
                        <Product key={product.id} product={product}/>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-1 carousel-buttons">
          <button
            className=""
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <i className="bi bi-arrow-left-circle-fill" />
          </button>
          <button
            className=""
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <i className="bi bi-arrow-right-circle-fill " />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


  {/* ---------------------------------Features-------------------------------------------- */}
  <section id="feature-sec" >
  <div id="features-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="features-head text-center">
            <h2 className="display-6">Features</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              similique.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="features-box-container">
    <div className="container">
      <div className="row g-2 justify-content-center">
        <div className="col-6 col-md-3 col-lg-3" data-aos="fade-up">
          <div className="feature-box">
            <img src={freeShipping} alt="" />
            <div className="feature-box-content">
              <span>Free Shipping</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                soluta.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 col-lg-3" data-aos="fade-up">
          <div className="feature-box">
            <img src={money} alt="" />
            <div>
              <span>Refund</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                soluta.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 col-lg-3" data-aos="fade-up">
          <div className="feature-box">
            <img src={socialCare} alt="" />
            <div>
              <span>Support</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                soluta.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 col-lg-3" data-aos="fade-up">
          <div className="feature-box">
            <img src={debitCard} alt="" />
            <div>
              <span>Payment</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                soluta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default Home