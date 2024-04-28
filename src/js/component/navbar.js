import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">STAR WARS</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">FAVORITES</button>
				</Link>
				{store.favorites.map((chara, index)=><p key={index}>{chara}</p>)}
			</div>
		</nav>
	);
};
