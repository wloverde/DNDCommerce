import React, { useState, useEffect } from "react";
/**
 * Renders a list of items based on the selected category.
 * @param {Object} props - The component props.
 * @param {string} props.selectedCategory - The selected category to fetch items for.
 * @returns {JSX.Element} - The Category component.
 */
const Category = ({ selectedCategory }) => {
  // State to hold the items for the selected category
  const [categoryItems, setCategoryItems] = useState([]);

  // Set the category title based on the selected category
  let categoryTitle = "";
  switch (selectedCategory) {
    case "Melee":
      categoryTitle = "Melee Items";
      break;
    case "Magic":
      categoryTitle = "Magic Items";
      break;
    case "Ranged":
      categoryTitle = "Ranged Items";
      break;
    case "Armor":
      categoryTitle = "Armor Items";
      break;
    case "Consumable":
      categoryTitle = "Consumable Items";
      break;
    default:
      categoryTitle = "Consumable Items";
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
    <div>
      <h2>{categoryTitle}</h2>
      <ul>
        {categoryItems.map((item) => (
          <li key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              {/* Render other item details as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
