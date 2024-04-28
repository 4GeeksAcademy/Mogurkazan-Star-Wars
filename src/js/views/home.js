import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { Characters } from "../component/characters";
import { Starships } from "../component/starships";
import { Planets } from "../component/planets";

export const Home = () => {
	const { store, actions } = useContext(Context);	
	return (
		<div className="caja text-center mt-5">
				<h1>Characters</h1>
				<div className=" row flex-row flex-nowrap overflow-auto my-3">
					{store.gente.map( (item)=> <Characters className=" mx-3" key={item.uid} uid={item.uid} title={item.name} />) }	
				</div>
				<h1>Starships</h1>
				<div className=" row flex-row flex-nowrap overflow-auto my-3">
					{store.naves.map( (item)=> <Starships className=" mx-3" key={item.uid} uid={item.uid} title={item.name} />) }	
				</div>
				<h1>Planets</h1>
				<div className=" row flex-row flex-nowrap overflow-auto my-3">
					{store.planets.map( (item)=> <Planets className=" mx-3" key={item.uid} uid={item.uid} title={item.name} />) }	
				</div>
		</div>

	)
};
