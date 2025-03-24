import React, { Suspense } from 'react';
import User from './user';


const fetchUserData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}
const counterStyle = {
    border: "2px solid green",
    padding: "30px",
    margin: "10px"
}
const Users = () => {
    const userDataPromise = fetchUserData();
    return (
        <div style={counterStyle}>
            <Suspense fallback={<h1>User data Loading...</h1>}>
                <User userDataPromise={userDataPromise}></User>
            </Suspense>
        </div>
    );
};

export default Users;