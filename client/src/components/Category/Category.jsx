import React, { useState, useEffect } from 'react';
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
    let categoryTitle = '';
    switch (selectedCategory) {
        case 'Melee':
            categoryTitle = 'Melee Items';
            break;
        case 'Magic':
            categoryTitle = 'Magic Items';
            break;
        case 'Ranged':
            categoryTitle = 'Ranged Items';
            break;
        case 'Armor':
            categoryTitle = 'Armor Items';
            break;
        case 'Consumable':
            categoryTitle = 'Consumable Items';
            break;
        default:
            categoryTitle = 'Items';
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
                    console.error('Failed to fetch category items');
                }
            } catch (error) {
                console.error('Error fetching category items:', error);
            }
        };

        fetchCategoryItems();
    }, [selectedCategory]);


    // Render the category title and list of items
    return (
        <div>
            <h2>{categoryTitle}</h2>
            <ul>
                {categoryItems.map((item) => (
                    <li key={item.id}>
                        {/* Render the item card component */}
                        {/* <ItemCard item={item} /> */}
                        wow its {categoryTitle}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
