import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaPlanets = (props) => {
	const { store, actions } = useContext(Context);
	const [planet, setPlanet] = useState({})
	const params = useParams();
	useEffect(()=>{
		console.log('se cargo la pag')
				fetch('https://www.swapi.tech/api/planets/' + params.vistaPlanets_id)
				.then(response => response.json())
				.then((data)=> setPlanet( data.result.properties))
	},[])
	return (
		<div className="vista1 container">
			<div className="row">
				<div className="col-md-4">
				<img className="img-fluid" src={`https://raw.githubusercontent.com/4GeeksAcademy/Mogurkazan-Star-Wars/master/src/img/planets/p${params.vistaPlanets_id}.jpg`} alt="..." />
				</div>
				<div className="col-md-8">
					<h1 className="display-4"> {planet.name}</h1>
					<hr className="my-4" />
					<p>Population: {planet.population}</p>
					<p>Diameter: {planet.diameter}</p>
					<p>terrain: {planet.terrain}</p>
					<Link to="/">
						<span className="btn btn-primary btn-lg" role="button">Back Home</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

VistaPlanets.propTypes = {
	match: PropTypes.object
};
