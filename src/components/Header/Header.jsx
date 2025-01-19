import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to={`/ `}>
                <img src="aaa" alt="logo" />
            </Link>
            <ul className='menu'>
                <li>
                    <NavLink to={`/about-us`}
                        className={({ isActive }) => isActive ? 'menu__item active' : 'menu__item'}
                    >
                        About us
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/contacts`}
                        className={({ isActive }) => isActive ? 'menu__item active' : 'menu__item'}
                    >
                        Contacts
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/gallery`}
                        className={({ isActive }) => isActive ? 'menu__item active' : 'menu__item'}
                    >
                        Gallery
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;