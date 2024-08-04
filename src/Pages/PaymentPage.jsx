import React from "react";
import "./../Styling/shipping-page.css";
import OrderSummary from "../Components/OrderSummary";
import PaymentMethod from "../Components/PaymentMethod";

const PaymentPage = (props) => {
  return (
    <div className="main-container">
        <div className="left-side">
          <PaymentMethod />
        </div>
        <div className="right-side">
          <OrderSummary
            btnTitle="Place Your Order and Pay"
            navigateLocation="/"
          />
        </div>
    </div>
  );
};

export default PaymentPage;
