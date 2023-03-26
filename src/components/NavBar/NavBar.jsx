import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"

const NavBar = () => {
    return (
        <header>
            <h1>Ecommerce</h1>
            <nav>
                <div>
                    <button>Celulares</button>
                    <button>Tablets</button>
                    <button>Laptos</button>
                </div>
            </nav>
            <CartWidget/>
        </header >
    );
}

export default NavBar;