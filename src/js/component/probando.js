import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

import { Link } from "react-router-dom";

export const Prueba = (props) => {
    
	return (
		<div className="caja card ">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Link className="btn btn-primary" to={"/testVista/" + props.uid }>
					<span>More info</span>
				</Link>
            </div>
        </div>
	);
};
