import React, { use } from 'react';
import Usr from './Usr';

const User = ({ userDataPromise }) => {
    const users = use(userDataPromise);
    console.log(users)
    return (
        <div>
            {
                users.map(user =><Usr user={user} key={user.id}></Usr>)
            }
        </div>
    );
};

export default User;