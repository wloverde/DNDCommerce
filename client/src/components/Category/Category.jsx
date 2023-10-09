import React, { useState, useEffect } from "react";
import "./Category.css";
/**
 * Renders a list of items based on the selected category.
 * @param {Object} props - The component props.
 * @param {string} props.selectedCategory - The selected category to fetch items for.
 */
const Category = ({ selectedCategory }) => {
  // State to hold the items for the selected category
  const [categoryItems, setCategoryItems] = useState([]);

  // Set the category title based on the selected category
  let categoryTitle = "";
  switch (selectedCategory) {
    case "Melee":
      categoryTitle = "Melee";
      break;
    case "Magic":
      categoryTitle = "Magic";
      break;
    case "Ranged":
      categoryTitle = "Ranged";
      break;
    case "Armor":
      categoryTitle = "Armor";
      break;
    case "Consumable":
      categoryTitle = "Consumables";
      break;
    default:
      categoryTitle = "Consumables";
      break;
  }
  // Fetch items based on the selected category
  useEffect(() => {
    const fetchCategoryItems = async () => {
      try {
        const response = await fetch(`/api/items?category=${selectedCategory}`);
        if (response.ok) {
          const data = await response.json();
          setCategoryItems(data);
        } else {
          console.error("Failed to fetch category items");
        }
      } catch (error) {
        console.error("Error fetching category items:", error);
      }
    };

    fetchCategoryItems();
  }, [selectedCategory]);

  return (
    <div className='category-container'>
      <h2>{categoryTitle}</h2>
      <div className='item-list'>
        {categoryItems.map((item) => (
          <ItemCard
            key={item.id}
            itemName={item.name}
            itemImage={item.image} // Replace with your actual item image field
            itemTags={item.tags} // Replace with your actual item tags field
            itemPrice={item.price}
            itemStock={item.stock} // Replace with your actual item stock field
            // itemDiscount={item.discount}  Replace with your actual item discount field
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
