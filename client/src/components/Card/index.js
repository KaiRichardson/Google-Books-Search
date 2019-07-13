import React from "react";
import "./style.css";

const Card = props => (
  <div className="click-item" onClick={props.onClick}>
    <img alt={props.name} src={props.image} id={props.key}/>
  </div>
);

export default Card;
