import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ items }) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="navbar">
      {/* Left Section: Logo + Search */}
      <div className="navbar-left">
        <img className="logo" src={assets.logo} alt="Logo" />
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            value={searchInput}
            onChange={handleSearchChange}
          />
          {searchInput && (
            <div className="search-results">
              {filteredItems.map((item) => (
                <div key={item.id} className="search-item">
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Section: Icons */}
      <div className="navbar-right">
        <FontAwesomeIcon icon={faBell} className="navbar-icon" title="Notifications" />
        <FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" title="Cart" />
        <FontAwesomeIcon icon={faUser} className="navbar-icon" title="Account" />
        <FontAwesomeIcon icon={faCog} className="navbar-icon" title="Settings" />
      </div>
    </div>
  );
};

export default Navbar;
