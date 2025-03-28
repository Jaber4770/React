import React from 'react';
import './cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    
    return (
        <div>
            <div className='cart'>
                {
                    cart.map(bottle => <div className='flex' key={bottle.id}>
                        <img src={bottle.img}></img>
                        <button className='btn' onClick={() => handleRemoveFromCart(bottle.id)}>X</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;