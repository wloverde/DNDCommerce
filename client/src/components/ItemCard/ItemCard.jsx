import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../../utils/helpers";
import { useStoreContext } from "../../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../../utils/actions";
import { idbPromise } from "../../../utils/helpers";
import "./ItemCard.css";

function ItemCard(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card w-80 shadow-xl">
        <Link to={`/item/${_id}`}>
          <figure>
            <img alt={name} src={image} />
          </figure>
          <p className="card-title">{name}</p>
        </Link>
      <div className="card-body">
        <span className="text-xl">Price: ${price}</span>
        <div>
          {quantity} {pluralize("item", quantity)} in stock
        </div>
      </div>
      <div className="card-actions">
        <button className="btn " onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
