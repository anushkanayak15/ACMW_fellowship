import React from 'react'

function CardDishes(props) {
  return (
    <div className="main-dish-reviews">
    <p className="dish-name">{props.dishName}</p>
    <div className="ratings">
      <img className="star-rating" src={props.starRating} alt='star rating'></img>
      <p className="num-rating"> {props.numRating}</p>
      <p className="num-of-ratings">  &#40;{props.numOfRatings} Reviews&#41;</p>
   </div>

    </div>
   
  )
}

export default CardDishes