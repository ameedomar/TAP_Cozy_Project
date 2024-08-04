import React from "react";
import "../Styling/address-page.css";
import AddressPanel from "./AddressPanel";
import OrderSummary from "./OrderSummary";

const Address = (props) => {
  return (
    <div>
      <div className="main-address">
        <div className="address-left-side">
          <div className="address-details-panels">
            <AddressPanel />
            <AddressPanel />
          </div>
          <div className="add-new-address">
            <button className="add-new-address-btn">+ Add New Address</button>
          </div>
          </div>
          <div className="address-right-side">
            <OrderSummary btnTitle="Continuo To Shipping" navigateLocation="/shipping"/>
        </div>
      </div>
    </div>
  );
};

export default Address;
