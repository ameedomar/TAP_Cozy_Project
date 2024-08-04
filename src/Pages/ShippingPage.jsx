import React from "react";
import ShippingMethod from "../Components/ShippingMethod";
import OrderSummary from "../Components/OrderSummary";
import "./../Styling/shipping-page.css"

const ShippingPage = (props) => {
  return (
    <div className="main-container">
      {/* <h1>Shipping Page</h1> */}
      <div className="left-side">
        <ShippingMethod />
      </div>
      <div className="right-side">
        <OrderSummary btnTitle="Continuo To Payment" navigateLocation="/payment" />
      </div>
    </div>
  );
};

export default ShippingPage;
