import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = ({ pricingPromise }) => {

    const PriceData = use(pricingPromise);
    console.log(PriceData);

    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-3 underline'>Get our Membership</h1>
            <div className='grid grid-cols-4 gap-10'>
                {
                    PriceData.map(pricingInfo => <PricingCard pricingInfo={pricingInfo} key={pricingInfo.id}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;