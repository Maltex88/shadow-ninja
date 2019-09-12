import React from "react";



// Shows total price
const TotalPrice = ({cart, totalPrice}) => {

    return (<div className="checkout__totalSum">
        {
            cart.length !== 0
                ? (<h3>Total sum: €{totalPrice}
                </h3>)
                : (<h3>Your Shopping Cart is Empty!</h3>)
        }
    </div>);
};

export default TotalPrice;
