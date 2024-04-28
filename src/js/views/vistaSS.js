import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaSS = (props) => {
	const { store, actions } = useContext(Context);
	const [naves, setNaves] = useState({})
	const params = useParams();
	useEffect(()=>{
		console.log('se cargo la pag')
				fetch('https://www.swapi.tech/api/starships/' + params.vistaSS_id)
				.then(response => response.json())
				.then((data)=> setNaves( data.result.properties))
	},[])
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4">
				<img className="img-fluid" src={`https://raw.githubusercontent.com/4GeeksAcademy/Mogurkazan-Star-Wars/master/src/img/characters/s${params.vistaSS_id}.jpg`} alt="..." />
				</div>
				<div className="col-md-8">
					<h1 className="display-4"> {naves.name}</h1>
					<hr className="my-4" />
					<p>Starship_class: {naves.starship_class}</p>
					<p>Length: {naves.length}</p>
					<p>Crew: {naves.crew}</p>
					<p>Manufacturer: {naves.manufacturer}</p>
					<Link to="/">
						<span className="btn btn-primary btn-lg" role="button">Back Home</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

VistaSS.propTypes = {
	match: PropTypes.object
};
