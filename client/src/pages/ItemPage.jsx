import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_PRODUCT } from "../../utils/queries";
import ItemCard from "../components/ItemCard/ItemCard";

function ItemPage() {
  const { itemId } = useParams();

  const {
    loading,error,data,
  } = useQuery(QUERY_PRODUCT, {
    variables: { _id: itemId },
  });

  if (loading){
    return <span className='loading loading-dots loading-lg'></span>;
  }
  console.log(data);



  return (
    <ItemCard
    key={data.product._id}
    itemId={data.product._id}
    itemName={data.product.name}
    itemImage={data.product.image}
    itemPrice={data.product.price}
    itemStock={data.product.quantity}
    itemDescription={data.product.description}
  />
  );
}

export default ItemPage;
