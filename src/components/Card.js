import React from "react";
import "./Card.css";

function Card(props) {
  const tags = props.tags;

  return (
    <div className={`Card ${props.active===false ? `inactive` : `` }`}>
      {props.icon}
      <div className="heading">
        <h2>{props.heading}</h2>
      </div>
      {tags.map((tag) => (
        <div className="tag">{tag}</div>
      ))}
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
