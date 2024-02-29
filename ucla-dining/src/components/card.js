import React from 'react'


function Card(props) {
  return (
    <div className="card">
     {props.children}
  <button className="see-more-button"> See More</button>
</div>

  )
}

export default Card