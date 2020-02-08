import React from "react";
import "./style.css";

function Navbar(props){
    return (
        <nav className="navbar bg-dark text-white mb-5">
            <span>Clicky Game</span>
            <span className={props.messageColor}>{props.message}</span>
            <span>Score: {props.score} | Top Score: {props.topScore}</span>
        </nav>
    );
}

export default Navbar;