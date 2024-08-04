import React from "react";
import "../Styling/cart-page.css";
import AddRemoveBox from "./AddRemoveBox";
import OrderSummary from "./OrderSummary";
import { useNavigate } from "react-router-dom";

function Cart() {

  const Navigate = useNavigate();
  return (
    <div>
      <div className="main-cart">
        <div className="cart-left-side">
          <div className="cart-items">
            <div className="cart-item">
              <div className="cart-item-img">
                <img src={require("./../Imgs/img.png")} alt="Chair" />
              </div>
              <div className="cart-item-details">
                <h2 className="cart-item-details-title">Osmond Armchair</h2>
                <h4 className="cart-item-details-description">
                  {" "}
                  <span className="cart-item-details-description-span">
                    Color{" "}
                  </span>{" "}
                  Gunnared biege
                </h4>

                <div className="cart-item-details-footer">
                  <AddRemoveBox />
                  <span className="cart-item-details-footer-span">Remove</span>
                </div>
              </div>
              <div className="cart-item-price">
                <h2>$149.99</h2>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-item-img">
                <img src={require("./../Imgs/img.png")} alt="Chair" />
              </div>
              <div className="cart-item-details">
                <h2 className="cart-item-details-title">Osmond Armchair</h2>
                <h4 className="cart-item-details-description">
                  {" "}
                  <span className="cart-item-details-description-span">
                    Color{" "}
                  </span>{" "}
                  Gunnared biege
                </h4>

                <div className="cart-item-details-footer">
                  <AddRemoveBox />
                  <span className="cart-item-details-footer-span">Remove</span>
                </div>
              </div>
              <div className="cart-item-price">
                <h2>$149.99</h2>
              </div>
            </div>
          </div>
          <div className="cart-items-text-footer">
            <div className="cart-items-text-footer-div">
              <img src={require("./../Imgs/percent.png")} alt="Percentage" />
              <span className="cart-items-text-footer-span">
                10% Instant Discount with Federal Bank Debit Cards on a min
                spend of $150. TCA
              </span>
            </div>
          </div>
        </div>
       <div className="cart-ri+ght-side">
        <OrderSummary btnTitle="Proceed To Checkout"  navigateLocation="/address" />
       </div>
      </div>
    </div>
  );
}
export default Cart;  
