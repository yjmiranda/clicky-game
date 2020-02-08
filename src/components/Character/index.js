import React from "react";

function Character(props){
    return(
        <img 
            alt={props.name}
            src={props.image}
            onClick={()=>props.handleClick(props.id)}
            className="border bg-info col-12 col-md-6 col-lg-3"
        />
    );
}

export default Character;