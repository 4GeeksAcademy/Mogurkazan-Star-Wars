import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Gente } from "../component/people";
import { Prueba } from "../component/probando";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [people, setPeople] = useState([])
	useEffect(()=>{
		fetch('https://www.swapi.tech/api/people/')
		.then(response => response.json())
		.then((data)=> setPeople(data.results))
	},[])
	return (
		<div className="text-center mt-5">
			
			<h1>desde API</h1>
			{people.map( (item)=> <Prueba key={item.uid} title={item.name} />) }

			<h1>desde FLUX</h1>
			{store.gente.map( (item)=> <Prueba key={item.uid} title={item.name} />) }
			
		</div>

	)
};
