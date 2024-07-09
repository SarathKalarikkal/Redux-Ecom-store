import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from '../components/Product';

function Womens() {

     const [products, setProducts] = useState([]);
     const [selectedSort, setSelectedSort] = useState("default");

     async function fetchData() {

      let url = "https://fakestoreapi.com/products/category/women%27s%20clothing"
      
      if(selectedSort === "priceHigh"){
        url += '?sort=desc'
     }if(selectedSort === "priceLow"){
      url += '?sort=asc'
     }

       try {
         const response = await axios.get(url);
         setProducts(response.data);
       } catch (error) {
         console.error("Failed to fetch products:", error);
       }
     }
   
     useEffect(() => {
       fetchData();
     }, [selectedSort]);
   
   console.log(products);
   
     return (
       <>
        <section id="products-sec">
  <div className="product-header-bg">
    <div className="container">
      <div className="row products-title">
        <div className="col-lg-12">
          <div className="products-header text-center">
            <h2 className="display-6">Our Products</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              repellendus ab, dolor enim sequi nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="product-display-sec mt-4">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
           
            <div className="col-12 ms-0">
              <div className="product_top_bar d-flex justify-content-end gap-3">
                <div className="dropdown">
                  <button
                    className="btn border btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-sort-alpha-up" />
                    <span className="btn-hide">Default Sorting</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                   
                    <li>
                      <a className="dropdown-item" href="#" onClick={()=>setSelectedSort("priceHigh")}>
                        Price High
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={()=>setSelectedSort("priceLow")}>
                        Price Low
                      </a>
                    </li>
                  </ul>
                </div>
               
              </div>
            </div>
          </div>
          <div className="row g-3 my-5">

             {
                products.map((product)=>{
                  return(
                       <Product product={product}/>
                  )
             })
             }


         
          </div>
          {/* <button className="load-more-btn mx-auto">
            <span>Load More</span>
            <i className="bi bi-chevron-double-down" />
          </button> */}
          
        </div>
      </div>
    </div>
  </div>
</section>
   
       </>
     )
  
}

export default Womens