import React from "react";
import "./../Styling/payment-com.css"

const PaymentMethod = (props) => {
  return (
    <div className="payment-methods-container">
      <h1>Payment Method</h1>

      {/* <div className="payment-methods-radio"> */}
        <table className="payment-methods-radio"> 
            <tr>
            <th>
        <div className="payment-radio-option">
          <div className="payment-radio">
            <input type="radio" value="Free" name="gender" />
            <img src={require("./../Imgs/visa.png")} alt="VISA" className="payment-radio-icon" />

            <span className="payment-radio-span">
              {" "}
              <b>**** 6754 </b>
            </span>
            <span className="payment-radio-info"> Expire 06/2021</span>
          </div>
          <button className="payment-radio-btn">Remove</button>
        </div>
        </th>
        </tr>

        <tr>
        <th>
        <div className="payment-radio-option">
          <div className="payment-radio">
            <input type="radio" value="Free" name="gender" />
            <img src={require("./../Imgs/mastercard.png")} alt="MASTER CARD" className="payment-radio-icon" />

            <span className="payment-radio-span">
              {" "}
              <b>**** 5643 </b>
            </span>
            <span className="payment-radio-info"> Expire 11/2025</span>
          </div>
          <button className="payment-radio-btn">Remove</button>
        </div>
        </th>
        </tr>
        </table>
 
      {/* </div> */}
    </div>
  );
};

export default PaymentMethod;
