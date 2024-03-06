import React from 'react'


function CardDiningHall(props) {
  return (
    <>
    <img className="dining-hall-picture" src={props.diningHallImage} alt='dining hall'></img>
    <p className="dining-hall-name">{props.diningHallName}</p>
    </>
    
  )
}

export default CardDiningHall