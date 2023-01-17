import React from "react";
import "./CheckoutProduct.css";

import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, name, price, stars, image }) => {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        src={require(`../products/imgs/${image}`)}
        alt=""
        className="checkoutProduct__image"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__price">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <div className="product__rating">{"🌟".repeat(stars)}</div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
