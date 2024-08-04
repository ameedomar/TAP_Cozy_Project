import React from "react";


import { useNavigate } from "react-router-dom";

const OrderSummary = (props) => {
  const Navigate= useNavigate();

  return (
    <div >
      <div className="cart-right-side-title">
        <h2>Order Summary</h2>
      </div>
      <div className="cart-right-side-details">
        <div className="cart-right-side-line">
          <san>Price</san>
          <san>$319.98</san>
        </div>
        <div className="cart-right-side-line">
          <san>Discount</san>
          <san>$31.9</san>
        </div>
        <div className="cart-right-side-line">
          <san>Shiping</san>
          <san>Free</san>
        </div>
        <div className="cart-right-side-line">
          <san>Coupon Applied</san>
          <san>$0.00</san>
        </div>
      </div>
      <div className="cart-right-side-checkout">
        <div className="cart-right-side-line">
          <san>TOTAL</san>
          <san>$288.08</san>
        </div>
        <div className="cart-right-side-line">
          <san>Estimated Delivery by</san>
          <san>01 Feb, 2023</san>
        </div>
        <div className="cart-right-side-line">
          <input
            type="text"
            placeholder="Coupon Code"
            className="cart-right-side-textfield"
          />
          <span>
            {" "}
            <img
              src={require("./../Imgs/Trailing Icon.png")}
              alt="Trailing Icon"
            />
          </span>
        </div>
        <div className="cart-right-side-line">
          <button className="cart-right-side-btn" onClick={()=>{Navigate(props.navigateLocation)}}> {props.btnTitle}</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
