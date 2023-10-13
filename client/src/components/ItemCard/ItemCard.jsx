import React from 'react';


const ItemCard = ({ itemName, itemImage, itemTags, itemPrice, itemStock }) => {
    return (
        <div className='item-card'>
            <h2>{itemName}</h2>
            <img src={itemImage} alt={itemName} />
            <p>Tags: {itemTags.join(', ')}</p>
            <p>Price: ${itemPrice}</p>
            <p>Stock: {itemStock}</p>
        </div>
    );
};

export default ItemCard;
