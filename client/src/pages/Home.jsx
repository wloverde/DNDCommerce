import React from "react";
import ItemList from "../components/ItemList/ItemList";  
import Category from "../components/Category/Category";
const Home = ({selectedCategory}) => { 
  return (
    <div className="container">  
    <ItemList />
    </div>
  );
};

export default Home;
