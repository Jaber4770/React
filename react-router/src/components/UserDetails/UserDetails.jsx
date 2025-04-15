import React, { Suspense, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import UserDetailsProMax from '../userDetailsPro/UserDetailsProMax';

const UserDetails = () => {
    const [showInfo, setShowInfo] = useState(false);
    const user = useLoaderData();
    const { name,id, website } = user;

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res =>res.json());

    const navigate = useNavigate();

    const handleShowMore = () => {
        setShowInfo(!showInfo);
    }

    return (
        <div className='p-2 m-1 rounded-lg'>
            <h1 className='font-semibold text-2xl'>{name}</h1>
            <p>Name: {name}</p>
            <p>Website: {website}</p>
            <div className='flex gap-4 py-2'>
                <button onClick={() => handleShowMore()} className='btn bg-green-400 me-2 text-black'>{showInfo ? 'Hide' : 'Show'} info</button>
                <button className='btn bg-red-800' onClick={() => navigate(-1)}>Go back</button>
            </div>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetailsProMax userPromise={userPromise}></UserDetailsProMax>
                </Suspense>
            }
        </div>
    );
};

export default UserDetails;