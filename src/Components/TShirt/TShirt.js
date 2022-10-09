import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt,handleAddToCart}) => {
    const {name , picture , price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={ () =>  handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default TShirt;