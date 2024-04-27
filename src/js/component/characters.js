import React from "react";
import { Link } from "react-router-dom";

export const Characters = (props) => {
    
	return (
		<div className="caja card ">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Link className="btn btn-primary" to={"/vistaChar/" + props.uid }>
					<span>More info</span>
				</Link>
            </div>
        </div>
	);
};
