import React from 'react';

const ItemCard = ({
  itemName,
  itemImage,
  itemPrice,
  itemStock,
  itemDescription,
}) => {
  return (
    <div className='card w-96 bg-base-200 shadow-xl image-full'>
      <figure>
        <img src={itemImage} alt={`Picture of ${itemName}`} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{itemName}</h2>
        <p>{itemDescription}</p>
        <div
          className='card-actions justify-end'
          style={{ alignItems: 'center' }}
        >
          <p>In Stock: {itemStock}</p>
          <p>${itemPrice}</p>
          <button className='btn btn-primary'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
