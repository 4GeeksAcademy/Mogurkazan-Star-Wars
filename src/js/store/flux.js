const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			gente: [],
			naves:[],
			planets:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
