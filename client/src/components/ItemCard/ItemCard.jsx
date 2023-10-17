import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const ItemCard = ({
  itemName,
  itemImage,
  itemPrice,
  itemStock,
  itemDescription,
  itemId,
}) => {
  console.log(itemImage);
  const shoppingCart = useShoppingCart(); 
  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const addToCartHandler = (itemName, itemPrice, itemDescription, itemId) => {
    const price = priceFormatter.format(itemPrice);
    shoppingCart.addItem({
      name: itemName,
      description: itemDescription,
      id: itemId,
      price: price,
      currency: 'USD',
    });
  };

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
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => {
              addToCartHandler(itemName, itemPrice, itemDescription, itemId)
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
