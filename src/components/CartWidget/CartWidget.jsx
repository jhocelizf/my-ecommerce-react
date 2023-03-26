import React from 'react';
import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img className='cardIcons' src={cart} alt="cart-widget" />
            <strong>0</strong>
        </div>
    );
}

export default CartWidget;