import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../../utils/actions';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../assets/images/spinner.gif';  

function ItemPage() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products  } = state;

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
    console.log("page to reload");
  }

  useEffect(() => {   
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id)); 
    }
    // retrieved from server
    else if (data) { 
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => { 

    const tempProduct = {...currentProduct, purchaseQuantity:0};
     delete tempProduct.__typename;
     delete tempProduct.category;
     delete tempProduct.description;     
     setCurrentProduct(tempProduct); 


    if (tempProduct) { 
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(tempProduct.purchaseQuantity) + 1,
      });

      idbPromise('cart', 'put', {
        ...tempProduct,
        purchaseQuantity: parseInt(tempProduct.purchaseQuantity) + 1,
      });
    } else {   
      
      dispatch({
        type: ADD_TO_CART,
        product: { ...tempProduct},
      });
      idbPromise('cart', 'put', { ...tempProduct });
    }

    refreshPage();
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

   
  return (
    <>
      {currentProduct? (
        <div className="container card card-side shadow-xl">
          <figure><img
            src={currentProduct.image}
            alt={currentProduct.name}
          /></figure>
          <div className="card-body">
          <div className='justify-end'><Link to="/">← Back to Products</Link></div>
          <h2 className="card-title" >{currentProduct.name}</h2>

          <p>{currentProduct.description}</p>

          <strong>Price:</strong>${currentProduct.price}{' '}
          <p className="card-actions justify-end">

            <button className="btn" onClick={addToCart}>Add to Cart</button>
            <button className="btn"
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}   
    </>
  );
}

export default ItemPage;
