import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
    const { user } = use(AuthContext);
    return (
        <div className='text-center py-5 my-20 space-y-3'>
            {
                user && <p>{user.email}</p>
            }
            <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
            </div>
        </div>
    );
};

export default Profile; 