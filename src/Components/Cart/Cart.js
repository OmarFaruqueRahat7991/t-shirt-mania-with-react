import React from "react";
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please Buy At Least One Item.</p>;
  } else if (cart.length === 1) {
    message = 
      <div>
        <p>Buy Another For A Surprise</p>
      </div>
    
  }
  else if (cart.length === 2) {
    message = 
      <div>
        <p>Congrats!You have got yourself a gift</p>
      </div>
  }
  
  else {
    message = <p>Thanks For Buying More</p>
  }
  return (
    <div>
      <h1 className={cart.length === 1 ? `orange` : `purple`}>Orders Summary</h1>
      <h5 className={`bold ${cart.length === 2 ? 'blue' : 'green'}`}>Order Quantity: {cart.length}</h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? <p>WOW!You have Bought 3 Pieces</p> : <p>Keep Buying.</p> }
      <p>And( & & ) Operator</p>
      {cart.length === 2 && <p>You have Bought 2 Pieces</p> }
      <p>Or( | | ) Operator</p>
      {cart.length === 4 || <p>You have not Bought 4 Pieces</p> }
    </div>
  );
};

export default Cart;
