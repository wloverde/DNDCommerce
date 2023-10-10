import React, { useState } from "react";
import Router from "./Router";
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import dragon from "./assets/images/homepage-dragon.jpg";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  

  // Define a callback function to set the selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='container-responsive'>
      {/* Pass the callback function as a prop */}
      <Navbar handleCategoryClick={handleCategoryClick} />
      <Category selectedCategory={selectedCategory} />
      <Router />
      {/* image test, can be resized, replaced, etc. */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={dragon}
          style={{ borderRadius: "12px", boxShadow: "0 0 8px" }}
        />
      </div>
    </div>
  );
}

export default App;
