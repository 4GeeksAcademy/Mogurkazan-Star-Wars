import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaChar = (props) => {
	const { store, actions } = useContext(Context);
	const [people, setPeople] = useState({})
	const params = useParams();
	useEffect(()=>{
		console.log('se cargo la pag')
				fetch('https://www.swapi.tech/api/people/' + params.characters_id)
				.then(response => response.json())
				.then((data)=> setPeople( data.result.properties))
	},[])
	return (
		<div className="vista1 container">
			<div className="row">
				<div className="col-md-4">
				<img className="img-fluid" src={`https://raw.githubusercontent.com/4GeeksAcademy/Mogurkazan-Star-Wars/master/src/img/characters/c${params.characters_id}.jpg`} alt="..." />
				</div>
				<div className="col-md-8">
					<h1 className="display-4"> {people.name}</h1>
					<hr className="my-4" />
					<p>Height: {people.height}</p>
					<p>Mass: {people.mass}</p>
					<p>Hair Color: {people.hair_color}</p>
					<p>Gender: {people.gender}</p>
					<Link to="/">
						<span className="btn btn-primary btn-lg" role="button">Back Home</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

VistaChar.propTypes = {
	match: PropTypes.object
};
