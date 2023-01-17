import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, name, price, stars, image }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        image: image,
        price: price,
        rating: stars,
      },
    });
  };

  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{name}</p>
          <p className="product__price">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <div className="product__rating">{"🌟".repeat(stars)}</div>
        </div>
        <img src={require(`../products/imgs/${image}`)} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;
