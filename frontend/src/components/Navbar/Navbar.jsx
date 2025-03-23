import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className='navbar'>
      <img src= {assets.logo} alt='logo' style={{ width: "120px", height: "auto" }}/>
      <ul className='navbar-menu'>
        <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>home</li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>menu</li>
        <li className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>mobile-app</li>
        <li className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt='search_icon' style={{ width: "44px", height: "24px"}}/>
        <div className="navbar-search-icon">
          <img src={assets.basket} alt='basket_icon' style={{ width: "24px", height: "24px" }}/>
          <div className="dot"></div>
        </div>
        
        <button>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
