import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li className="">{`${props.status}`}</li>
        <li>{`Score: ${props.score} | Top Score: ${props.topScore}`}</li>
      </ul>
    </nav>
  );
}

export default Nav;
