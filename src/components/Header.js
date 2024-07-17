import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import './Header.css';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="container">
      <div className='headerTop'>
        <div className='logo'>
          <img src='./images/Group 427319094.png' alt='Logo'></img>
        </div>
        <div className='allSearch'>
          <div className='select-wrapper'>
            <select name="all" id="all">
              <option value="all">All</option>
              <option value="noot">Noot</option>
              <option value="tel">Tel</option>
            </select>
            <SlArrowDown className='select-icon' />
          </div>
          <div className='search-wrapper'>
            <FaSearch className='search-icon' />
            <input type="search" id="search" name="search" placeholder='Search'/>
            <button>Search</button>
          </div>
        </div>
        <div className='headtopright'>
          <FaRegHeart className='topicon' />
          <div className="cart-icon-wrapper">
            <BsCart2 className='topicon' />
            <div className="cart-count">2</div>
          </div>
          <button>Login</button>
        </div>
      </div>
      <div className='headnav'>
        <div className='cat'>
          < AiOutlineMenu />
          <select name="cat" id="cat">
            <option value="cat">All Categories</option>
            <option value="noot">Noot</option>
            <option value="tel">Tel</option>
          </select>
          <SlArrowDown />
        </div>
        <nav>
          <ul>
            <li><a href="/" className={location.pathname === "/" ? "active" : ""}>Home</a></li>
            <li><a href="/shop" onClick={toggleDropdown} className={location.pathname === "/shop" ? "active" : ""}>Shop <SlArrowDown /></a>
              {dropdownVisible && (
                <ul className="dropdown">
                  <li><a href="/shop/category1">Category 1</a></li>
                  <li><a href="/shop/category2">Category 2</a></li>
                  <li><a href="/shop/category3">Category 3</a></li>
                </ul>
              )}
            </li>
            <li><a href="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</a></li>
            <li><a href="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</a></li>
            <li><a href="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
