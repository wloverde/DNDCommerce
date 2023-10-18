import React from "react";
import ItemList from "../components/ItemList/ItemList";
import Category from "../components/Category/Category";

const Home = () => {
  return (
    <div className="container"> 
      <Category />
      <ItemList /> 
    </div>
  );
};

export default Home;
