import React, { useEffect, useState } from "react";
import "./Home.css";

import Product from "./Product.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(require("../products/products.json")["products"]);
  }, []);

  const createProductsArray = (products) => {
    const prodArray = [];

    products.forEach((product, index) => {
      prodArray.push(
        <Product
          key={index}
          id={product.id}
          name={product.name}
          price={product.price}
          stars={product.stars}
          image={product.image}
        />
      );
    });

    return prodArray;
  };

  const createProductDivs = (productsArray) => {
    const numberProducts = productsArray.length;
    const numberDivs = Math.ceil(numberProducts / 3);
    const divsArray = [];

    let productArrayLowerLimit, productArrayUpperLimit, inDivProductArray;
    for (let i = 0; i < numberDivs; i++) {
      productArrayLowerLimit = i * 3;
      productArrayUpperLimit = (i + 1) * 3;

      inDivProductArray = productsArray.slice(
        productArrayLowerLimit,
        productArrayUpperLimit
      );

      divsArray.push(
        <div className="home__row" key={i}>
          {inDivProductArray.map((prod) => prod)}
        </div>
      );
    }

    return divsArray;
  };

  const productsArray = createProductsArray(products);
  const divsArray = createProductDivs(productsArray);

  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src={require("../static/img/eshop_banner.png")}
            alt=""
            className="home__image"
            height="400vh"
          />

          {divsArray.map((div) => div)}
        </div>
      </div>
    </div>
  );
};

export default Home;
