import React from "react";
import "./Subtotal.css";

const Subtotal = ({ numberItems, value }) => {
  return (
    <div className="subtotal">
      <p>
        Subtotal ({numberItems} items):{" "}
        <strong>
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;
