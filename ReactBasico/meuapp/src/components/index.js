
import React from 'react'
import './card.css'

function Card(props) {
  return (


    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}

export default Card;
