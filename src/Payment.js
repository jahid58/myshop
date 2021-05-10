import React from "react";
import CurrencyFormat from "react-currency-format";
import ProcessPayment from "./PocessPayment";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

const Payment = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div
      className="bg-light rounded shadow text-center m-auto mt-5 p-5"
      style={{ width: "300px", height: "300px" }}
    >
      <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={"text"}
        decimalScale={2}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>{" "}
            </p>
          </div>
        )}
      />
      <ProcessPayment></ProcessPayment>
    </div>
  );
};

export default Payment;
