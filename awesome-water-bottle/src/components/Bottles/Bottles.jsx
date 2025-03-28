import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addItemToCartLocalStorage, getCartFromLocalStorage, removeFromlLocalStorage } from '../../utilities/localstorage';
import Cart from '../cart/Cart';

const Bottles = ({ bottlePromise }) => {
    const bottles = use(bottlePromise);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addItemToCartLocalStorage(bottle.id);
    }

    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart);
        removeFromlLocalStorage(id);
    }

    useEffect(() => {
        const storedIDs = getCartFromLocalStorage();
        // console.log(storedIDs);
        // console.log(bottle);
 
        const storedCart = [];

        for (const id of storedIDs) {
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }
        setCart(storedCart);
    }, [bottles])

    return (
        <div>
            <h1>Total Bottles: {bottles.length}</h1>
            <p>Cart List: {cart.length}</p>

            <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>

            <div className='bottleCard'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles; <h1>Bottles</h1>