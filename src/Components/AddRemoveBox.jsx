import React, { useState } from "react";
import "../Styling/first-page.css";


const AddRemoveBox = (props) => {
  const [amount, setAmount] = useState(0);

  const addItem = () => {
    setAmount(amount + 1);
  };
  const removeItem = () => {
    if (amount > 0) setAmount(amount - 1);
  };
  return (
    <div>
      <button className="add-remove-btn">
              <span onClick={removeItem}>-</span> <span>{amount}</span>{" "}
              <span onClick={addItem}>+</span>
            </button>
    </div>
  )
};

export default AddRemoveBox;
