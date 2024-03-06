import React from 'react'
import Logo from "../assets/food-bank.svg";
import { Link} from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
        <div className="left-section">
            <img className="logo" src={Logo} alt='Logo' />
            <Link to ="/" className="header-text">Dining Reviews</Link>
            
        </div>
        <div className="right-section">
            <div className="review-text"> Write a Review </div>
            <button className="log-in"> Log In </button>
            <button className="sign-up"> Sign Up </button>
  </div>
    
    </nav>
  )

}

export default Header