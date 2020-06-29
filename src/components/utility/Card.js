import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  const tags = props.tags;

  return (
    <Link to={props.link} className={`Card ${props.active === false ? `inactive` : ``}`}>
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
    </Link>
  );
}

export default Card;
