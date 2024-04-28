import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">STAR WARS</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="fav btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Mi lista</a></li>
						{store.favorites.map((chara, index)=><li key={index}><a className="dropdown-item" href="#"/>{chara}</li>)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
