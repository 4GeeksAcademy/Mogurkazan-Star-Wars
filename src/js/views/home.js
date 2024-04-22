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
		<div className="cartas container d-flex overflow-auto text-center mt-5">
			{store.gente.map( (item)=> <Prueba className="mx-3" key={item.uid} uid={item.uid} title={item.name} />) }
			
		</div>

	)
};
