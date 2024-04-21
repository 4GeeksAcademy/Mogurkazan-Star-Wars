import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const TestVista = props => {
	const { store, actions } = useContext(Context);
	const [people, setPeople] = useState({})
	const params = useParams();
	useEffect(()=>{
		console.log('se cargo la pag')
				fetch('https://www.swapi.tech/api/people/' + params.testVista_id)
				.then(response => response.json())
				.then((data)=> setPeople( data.result.properties))
	},[])
	return (
		<div className="jumbotron">
			<h1 className="display-4">This PERSON: {people.name} {params.testVista_id}</h1>

			<hr className="my-4" />
			<p>height: {people.height}</p>
			<p>height: {people.mass}</p>
			<p>height: {people.hair_color}</p>
			<p>height: {people.gender}</p>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

TestVista.propTypes = {
	match: PropTypes.object
};
