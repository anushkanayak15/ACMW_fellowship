import React from 'react'
import Logo from "../assets/food-bank.svg";

function Header() {
  return (
    <div className="header">
        <div className="left-section">
            <img className="logo" src={Logo} alt='Logo' />
            <div className="header-text">Dining Reviews</div>
        </div>
        <div className="right-section">
            <div className="review-text"> Write a Review </div>
            <button className="log-in"> Log In </button>
            <button className="sign-up"> Sign Up </button>
  </div>
    
    </div>
  )
}

export default Header