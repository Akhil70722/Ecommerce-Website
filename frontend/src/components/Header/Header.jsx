import React from 'react';
import './Header.css';

const Header = () => {
    const scrollToMenu = () => {
        const menuSection = document.getElementById('explore-menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='header'>
            <div className='header-contents'>
                <h2 className='z-[-10]'>Everything You Need for Campus Life</h2>
                <p>
                    Discover top-quality college uniforms, sportswear, seasonal outfits, shoes, stationery, and more — all in one place. Shop smart, live stylish!
                </p>
                <button onClick={scrollToMenu}>Shop Now</button>
            </div>
        </div>
    );
}

export default Header;
