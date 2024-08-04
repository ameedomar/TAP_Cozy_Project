import React from "react";
import "./../Styling/shipment-comp.css";

const ShippingMethod = (props) => {
  return (
    <div className="main-shipping">
      <h3>Shipment Method</h3>

      <table className="payment-methods-radio">
        <tr>
          <th>
            <div className="payment-radio-option">
              <div className="payment-radio">
                <input type="radio" value="Free" name="gender" />
                <h4 className="payment-radio-icon">Free</h4>

                <span className="payment-radio-span-2">
                  {" "}
                  <span> Regular Shipment </span>
                </span>
              </div>
              <span className=""> 01 Feb, 2023</span>
            </div>
          </th>
        </tr>

        <tr>
          <th>
            <div className="payment-radio-option">
              <div className="payment-radio">
                <input type="radio" value="Free" name="gender" />
                <h4 className="payment-radio-icon"> $8.5 </h4>
                <span className="payment-radio-span-2">Regular Shipping</span>
              </div>
              <span className=""> 28 Jan, 2023</span>
            </div>
          </th>
        </tr>

        <tr>
          <th>
            <div className="payment-radio-option">
              <div className="payment-radio">
                <input type="radio" value="Free" name="gender" />
                <h4 className="payment-radio-icon"> Scheduale</h4>

                <span className="payment-radio-span-2">
                  Choose a date that works for you
                </span>
              </div>
              <select className="select-shippiment-method">
                <option value="Select Date">Select Date</option>
              </select>
            </div>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default ShippingMethod;

{
  /* <table className="shipment-radio">
<tr>
  <th>
    <div className="shipment-radio-option">
      <div>
        <input type="radio" value="Free" name="gender" /> <b>Free </b>
        <span className="radio-span"> Regular Shipping </span>
      </div>
      <span>
        {" "}
        <b> 01 Feb, 2023</b>{" "}
      </span>
    </div>
  </th>
</tr>
<tr>
  <th>
    <div className="shipment-radio-option">
      <div>
        <input type="radio" value="8.5$" name="gender" /> <b>%8.5</b>
        <span className="radio-span"> Priority Shipping </span>
      </div>
      <span>
        <b> 28 Jan, 2023 </b>{" "}
      </span>
    </div>
  </th>
</tr>

<tr>
  <th>
    <div className="shipment-radio-option">
      <div>
        <input type="radio" value="Scheduale" name="gender" />{" "}
        <b>Scheduale</b>
        <span className="radio-span">
          {" "}
          Choose a data that works for you.{" "}
        </span>
      </div>
      <span> Select date </span>
    </div>
  </th>
</tr>
</table> */
}
