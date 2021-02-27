import React from 'react';

const Cart = (props) => {
    const cart =props.cart
    let totalPopulation=0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation=totalPopulation+country.population
        
    }
    return (
        <h4>
            This is {cart.length}
            <br/>
            Total Population {totalPopulation}
        </h4>
    );
};

export default Cart;