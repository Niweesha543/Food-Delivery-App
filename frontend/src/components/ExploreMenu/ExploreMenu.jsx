import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

function ExploreMenu() {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Try our mouth-watering restaurant menu designs. Easily customize to match your brand.
        Make edits whenever you need. Designed by professionals, customized by you.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div key={index} className="explore-menu-list-item">
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenu;
