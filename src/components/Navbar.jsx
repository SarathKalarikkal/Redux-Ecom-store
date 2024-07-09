import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import HamburgerMenu from './Hamburger'
import Loader from './Loader'

function Navbar() {

  const cartItems = useSelector(state => state.cart.cart)
  const wishListItems = useSelector(state => state.wishList.wishList)

  const location = useLocation()

  const activeLink = (path)=>{
   return location.pathname === path
  }




  return (
    <>
<nav
  className="navbar bg-light shadow-md navbar-expand-lg "
  aria-label="Ninth navbar example"
>
  <div className="container-xl">
    <Link className="navbar-brand fw-bold" to={"/"}>
   
    ShopEase
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarsExample07XL"
      aria-controls="navbarsExample07XL"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <HamburgerMenu />
    </button>
    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">

          <Link className={`nav-link ${activeLink('/') ? 'active' : '' }`} aria-current="page" to={"/"} >
            Home
          </Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link
            className={`nav-link dropdown-toggle ${activeLink('/shop') ? 'active' : '' } `}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Shop
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={"/shop/mens"}>
                Mens
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/shop/womens"}>
                Womens
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/shop/electronics"}>
              Electronics
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/shop/jewelery"}>
              Jewelery
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className={`nav-link cartIcon ${activeLink('/wishList') ? 'active' : '' }`} to={"/wishList"}>
          <i class="bi bi-heart"></i>
          <span className={wishListItems.length === 0 ?'' : 'active' }>
              {wishListItems && wishListItems.length}
              </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link cartIcon ${activeLink('/cart') ? 'active' : '' }`} to={"/cart"}>
             <i class="bi bi-bag cartIcon"></i>
             <span className={cartItems.length === 0 ?'' : 'active' }>
              {cartItems && cartItems.length}
              </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${activeLink('/login') ? 'active' : '' }`} to={"/login"}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar