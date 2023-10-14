import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dragon from '../../assets/images/homepage-dragon.jpg';
import './Category.css';
/**
 * Renders a list of items based on the selected category.
 * @param {Object} props - The component props.
 * @param {string} props.selectedCategory - The selected category to fetch items for.
 */
const Category = ({ selectedCategory }) => {
  // State to hold the items for the selected category
  const [categoryItems, setCategoryItems] = useState([]);

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
  // Fetch items based on the selected category

  

  return (
    <div className='category-container'>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={dragon}
          style={{ borderRadius: '12px', boxShadow: '0 0 8px' }}
        />
      </div>
      <h2 className=''>{categoryTitle}</h2>
      <div className='item-list'>
        {categoryItems.map((item) => (
          <Link to={`/item/${item.id}`} key={item.id}>
            <ItemCard
              itemName={item.name}
              itemImage={item.image}
              itemTags={item.tags}
              itemPrice={item.price}
              itemStock={item.stock}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
