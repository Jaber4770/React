import React, { use } from 'react';
import User from '../User/User';

const Users2 = ({ usersPromise }) => {
    const users = use(usersPromise);
    console.log(users);
    return (
        <div className='flex items-center justify-center border-1 p-5 bg-green-400 text-black'>
            <div className='grid grid-cols-5'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users2;