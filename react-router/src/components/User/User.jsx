import React from 'react';
import { Link, useNavigate } from 'react-router';

const User = ({ user }) => {
    const { name, email, id, phone } = user;
    
    return (
        <div className='border-1 p-2 m-1 rounded-lg'>
            <h1 className='font-semibold text-2xl'>{name}</h1>
            <p>email: { email}</p>
            <p>phone: {phone}</p>
            
            <Link className='btn mt-5 ' to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;