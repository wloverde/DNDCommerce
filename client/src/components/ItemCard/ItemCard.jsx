import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import "./ItemCard.css"

const ItemCard = ({
  itemName,
  itemImage,
  itemPrice,
  itemStock,
  itemDescription,
  itemId,
}) => {
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
      image: itemImage,
      id: itemId,
      price: price,
      currency: 'USD',
    });
  };

  return (
    <div className='card bg w-96 bg-base-100 shadow-xl'>
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
          <h4 className='fo'>${itemPrice}</h4>
          <p>In Stock: {itemStock}</p>
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
