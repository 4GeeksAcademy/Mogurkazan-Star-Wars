const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			gente: [],
			naves:[],
			planets:[],
			favorites:[],
			color: "black"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			exampleFunction: () => {
				
			},
			handleClick: (color, props) => {
				const newColor = color === 'black' ? 'red' : 'black';
        		setStore({color:newColor});
        		actions.getFavs(props.title, 'characters', props.uid);
			},
			getFavs: (name, category, index) => {
				const store = getStore();
				const { favorites } = store;
				console.log(category)
		
				// Verificar si el favorito ya existe
				const favoriteIndex = favorites.findIndex((fav) => fav.name === name && fav.category === category && fav.index === index);
		
				if (favoriteIndex !== -1) {
					// Si el favorito ya existe, eliminarlo
					const updatedFavorites = [...favorites.slice(0, favoriteIndex), ...favorites.slice(favoriteIndex + 1)];
					setStore({ favorites: updatedFavorites });
				} else {
					// Si el favorito no existe, agregarlo
					const newFavorite = { name, category, index };
					setStore({ favorites: [...favorites, newFavorite] });
				}
			},
			deleteFavs: (index) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter((item, i) => i !== index);
				setStore({
					favorites: updatedFavorites
				});
			},
			loadSomeData: () => {
				//Fetch de los characters
				console.log('se cargaron los pjs')
				fetch('https://www.swapi.tech/api/people/')
				.then(response => response.json())
				.then((data)=> setStore({ gente: data.results}))
				//Fetch de las naves
				console.log('se cargaron las naves')
				fetch('https://www.swapi.tech/api/starships/')
				.then(response => response.json())
				.then((data)=> setStore({ naves: data.results}))
				//Fetch de los planetas
				console.log('se cargaron los planetas')
				fetch('https://www.swapi.tech/api/planets/')
				.then(response => response.json())
				.then((data)=> setStore({ planets: data.results}))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
