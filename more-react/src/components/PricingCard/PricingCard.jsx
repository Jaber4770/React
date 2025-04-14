import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingCard = ({ pricingInfo }) => {

    console.log(pricingInfo);
    const { name, billing_cycle, features, price, image_url } = pricingInfo;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image_url}
                    alt="web" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <ul>
                    {
                        features.map(feature => <div className='flex gap-2 mb-3'><CircleCheckBig /><li>{feature}</li></div>)
                    }
                </ul>
                <div className="card-actions justify-between">
                    <div>
                        <button className='text-3xl'>${price}</button>
                        <span>/{billing_cycle}</span>
                    </div>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;