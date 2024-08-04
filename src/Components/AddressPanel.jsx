import React from "react"

const AddressPanel = (props) => {
  return (
    <div className="address-details-panel">
              <div className="address-details-panel-header"> 
            <h2>
            <input type="radio" value="option1" />
            <span className="radio-title">

            Huzefa Bagwala
            </span>
          </h2>
          <div className="address-details-panel-header-btns">
            <button className="address-details-panel-header-btn">Edit</button>
            <button className="address-details-panel-header-btn remove-btn">Remove</button>
          </div>
          </div>
          <div className="address-details-panel-footer">
            <span>1131 Dusty Townline, Jacksonville, TX 40322</span>
             <span>  <strong> Contact-  </strong> (936) 361-0310</span> 
            </div>
          </div>
  )
};

export default AddressPanel;
