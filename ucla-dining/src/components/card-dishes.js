import React from 'react'
import { Link } from 'react-router-dom'

function CardDishes(props) {
  return (
    <div className="main-dish-reviews">
    <Link to ="/dish" className="dish-name">{props.dishName}</Link>
    <div className="ratings">
      <img className="star-rating" src={props.starRating} alt='star rating'></img>
      <p className="num-rating"> {props.numRating}</p>
      <p className="num-of-ratings">  &#40;{props.numOfRatings} Reviews&#41;</p>
   </div>

    </div>
   
  )
}

export default CardDishes

//  <Link to ="/dish" className="dish-name">{props.dishName}</Link>
// <div className="dish-name">{props.dishName}</div>