import React from "react";
import "./Checkout.css";

import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [state, dispatch] = useStateValue();

  const totalSum = state.basket?.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jgp"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {state.basket.map((item, index) => {
            return (
              <CheckoutProduct
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                stars={item.stars}
              />
            );
          })}
          {/* <CheckoutProduct
            name={"1"}
            price={10}
            stars={2}
            image={"product_1.webp"}
          /> */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal numberItems={state.basket.length} value={totalSum} />
      </div>
    </div>
  );
};

export default Checkout;
