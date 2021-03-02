import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    // const totalSalary = cart.reduce((sum, player) => sum + player.income, 0);
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalSalary = totalSalary + player.income;
    }


    return (
        <div>
            <h5>Total Team Members: {cart.length}</h5>
            <h4>Total Budget: ${totalSalary}</h4>
        </div>
    );
};

export default Cart;