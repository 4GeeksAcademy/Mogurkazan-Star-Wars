import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log("Favorites:", store.favorites);


	return (
		<nav className="menu navbar   mb-3 fixed-top">
			<Link className="starwars" to="/">
				<span className="navbar-brand mb-0 h1">STAR WARS</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="fav btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
					</button>
					<ul className="dropdown-menu">
                        {store.favorites.map((fav, index) => (
                            <li key={index} onClick={(e) => e.stopPropagation()}>
                                <div className="d-flex align-items-center">
									<Link className="fav-item dropdown-item" to={`/${fav.category}/${fav.index}`}>{fav.name}</Link>
                                    <button className="x btn-sm rounded-pill ms-auto text-end" onClick={() => actions.deleteFavs(index)}><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </li>
                        ))}
                    </ul>
				</div>
			</div>
		</nav>
	);
};
