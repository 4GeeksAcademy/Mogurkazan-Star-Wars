import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
    const { store, actions } = useContext(Context);
    const [color, setColor] = useState('black')
    const handleClick = () => {
        const newColor = color === 'black' ? 'red' : 'black';
        setColor(newColor);
        actions.getFavs(props.title);
    };
	return (
		<div className="cartas card mx-3 p-0">
            <img src={`https://raw.githubusercontent.com/4GeeksAcademy/Mogurkazan-Star-Wars/master/src/img/planets/p${props.uid}.jpg`} className="card-img-top w-100 mx-0 px-0" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div className="row">
                    <Link className="btn col-8 btn-primary mx-1" to={"/vistaPlanets/" + props.uid }>
                        <span>More info</span>
                    </Link>
                    <button className="heart col-4" onClick={handleClick}>
                        <i className="fa-solid fa-heart" style={{color: color}}></i>
                    </button>
                </div>
            </div>
        </div>
	);
};