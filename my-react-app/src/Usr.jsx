import React from 'react';

const box = {
    border: "2px solid tomato",
    margin: "5px"
}
const Usr = ({ user }) => {
    return (
        <div style={box}>
            <h4>Name: {user.name}</h4>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
        </div>
    );
};

export default Usr;