import React from "react";
import "./navBar.css"

const navBar = props => {
    return (
        <nav className = "navBar navBar-expand-lg">
       <div className=""> Clicky Game</div>
       <div>{props.scores.topMessage}</div>
       <div>Score: {props.scores.score} |
       Top Score: {props.scores.topScore}</div>
        </nav>
    );
};

export default navBar;