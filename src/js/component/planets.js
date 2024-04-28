import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
    const { store, actions } = useContext(Context);
	return (
		<div className="cartas card mx-3">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Link className="btn btn-primary" to={"/vistaPlanets/" + props.uid }>
					<span>More info</span>
				</Link>
                <button onClick={()=>actions.getFavs(props.title)}>fav</button>
            </div>
        </div>
	);
};