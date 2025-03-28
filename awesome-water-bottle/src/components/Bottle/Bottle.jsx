import React from 'react';
import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    const { img, name, price, ratings, seller, stock } = bottle;


    return (
        <div className='card'>
            <img className='imgStyle' src={img} alt="" />
            <h2>{name}</h2>
            <h1>${price}</h1>
            <h4>Available: {stock}</h4>
            <h5>Rating: {ratings}</h5>
            <h3>Seller: {seller}</h3>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;