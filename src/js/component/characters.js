import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = (props) => {
    const { store, actions } = useContext(Context);
	return (
		<div className="cartas card mx-3 ">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Link className="btn btn-primary mx-1" to={"/vistaChar/" + props.uid }>
					<span>More info</span>
				</Link>
                <button onClick={()=>actions.getFavs(props.title)}>fav</button>
            </div>
        </div>
	);
};
