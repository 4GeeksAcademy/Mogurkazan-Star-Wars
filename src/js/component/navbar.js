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
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
					</button>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Mi lista</a></li>
						{store.favorites.map((chara, index)=><li key={index}><a class="dropdown-item" href="#"/>{chara}</li>)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
