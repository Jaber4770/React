import React, { use } from 'react';

const UserDetailsProMax = ({ userPromise }) => {
    const userData = use(userPromise);
    const { name, username, email } = userData;
    return (
        <div>
            <h1>Name: { name}</h1>
            <h1>username: { username}</h1>
            <h1>EMAIL: { email}</h1>
        </div>
    );
};

export default UserDetailsProMax;