import React from 'react';
import './NavBar.css';

const navBar = () => {
    const mockNavItems = ['new', 'all watches', 'accessories', 'watch strapes', 'gift cards', 'store location'];

    return (
        <div className='nav-bar'>
            <a href='https://www.danielwellington.com'><div className='logo'></div></a>
            <ul className='nav-menu'>
                {
                    mockNavItems.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
            <span className='cart'></span>
        </div>
    );
}

export default navBar;