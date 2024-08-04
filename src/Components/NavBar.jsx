import React from "react";
import "./../Styling/navbar.css";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const Navigation= useNavigate();
  return (
    <div className="navbar-cart">
      

    <nav className="nav">
      <a className="site-title">
        {" "}
        <img src={require("./../Imgs/Cozy.png")} alt="Cozy" onClick={()=>{Navigation("/")}} />
      </a>
      <ul>
        <li className="">
          <a className="navbar-option">SHOP</a>
        </li>
        <li className="">
          <a>COLLECTIVE</a>
        </li>
        <li className="">
          <a>DESIGNERS</a>
        </li>
        <li className="">
          <a>ABOUT US</a>
        </li>
        <li className="">
          <a>CONTACT</a>
        </li>
      </ul>

      <div className="navbar-right-side-options">
      <img className="navbar-right-side-option" src={require("./../Imgs/menu.png")} alt="Chair" />
      <img className="navbar-right-side-option" src={require("./../Imgs/search.png")} alt="Chair" />

      </div>
    </nav>
    <div className="cart-in-navbar"> 
    <img className="cart-in-navbar-icon" src={require("./../Imgs/shopping-cart.png")} alt="Chair" />

    </div>
      </div>
  );
};

export default NavBar;
