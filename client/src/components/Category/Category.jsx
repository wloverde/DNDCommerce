import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../../utils/queries';
import dragon from '../../assets/images/homepage-dragon.jpg';
import ItemCard from '../ItemCard/ItemCard';

import './Category.css';
/**
 * Renders a list of items based on the selected category.
 * @param {Object} props - The component props.
 * @param {string} props.selectedCategory - The selected category to fetch items for.
 */
const Category = ({ selectedCategory }) => {
  // State to hold the items for the selected category
  // const [categoryItems, setCategoryItems] = useState([]);

  // Set the category title based on the selected category
  let categoryTitle = '';
  switch (selectedCategory) {
    case '6528a02159e8e489b3cf8159':
      categoryTitle = 'Melee';
      break;
    case '6528a02159e8e489b3cf815b':
      categoryTitle = 'Magic';
      break;
    case '6528a02159e8e489b3cf815a':
      categoryTitle = 'Ranged';
      break;
    case '6528a02159e8e489b3cf815c':
      categoryTitle = 'Armor';
      break;
    case '6528a02159e8e489b3cf815d':
      categoryTitle = 'Consumables';
      break;
    default:
      categoryTitle = 'Consumables';
      break;
  }
  // query products based on the selected category
  const {
    loading: loadingProducts,
    error: errorProducts,
    data: dataProducts,
  } = useQuery(QUERY_PRODUCTS, {
    variables: { category: selectedCategory },
  });

  if (loadingProducts) {
    return <span className='loading loading-dots loading-lg'></span>;
  }

  return (
    <div className='category-container'>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={dragon}
          style={{ borderRadius: '12px', boxShadow: '0 0 8px' }}
        />
      </div>
      <h2 style={{ margin: '25px 0', fontSize: '2rem', fontWeight: 'bold' }}>
        {categoryTitle}
      </h2>
      <div className='item-list'>
        {dataProducts.products.map((item) => (
          <Link to={`/item/${item._id}`} key={item._id}>
          <ItemCard
            key={item._id}
            itemId={item._id}
            itemName={item.name}
            itemImage={item.image}
            itemPrice={item.price}
            itemStock={item.quantity}
            itemDescription={item.description}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
