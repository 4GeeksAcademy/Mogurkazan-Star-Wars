import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { Characters } from "../component/characters";
import { Starships } from "../component/starships";
import { Planets } from "../component/planets";

export const Home = () => {
	const { store, actions } = useContext(Context);	
	return (
		<div className="container-fluid d-flex">
			<div className="row">
				<div className="cartas overflow-auto mt-5">
					{store.gente.map( (item)=> <Characters className="col-2 mx-3" key={item.uid} uid={item.uid} title={item.name} />) }	
				</div>
			</div>
			<div className="row">
				<div className="cartas overflow-auto mt-5">
					{store.naves.map( (item)=> <Starships className=" col-2 mx-3" key={item.uid} uid={item.uid} title={item.name} />) }	
				</div>
			</div>
			<div className="row">
				<div className="cartas overflow-auto mt-5">
					{store.planets.map( (item)=> <Planets className=" col-2 mx-3" key={item.uid} uid={item.uid} title={item.name} />) }	
				</div>
			</div>
		</div>

	)
};
