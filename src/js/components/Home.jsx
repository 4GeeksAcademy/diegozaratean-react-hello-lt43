import React from "react";


//4. Importar compoonente
import Nav from "./nav";
import Jumbotron from "./Jumbotron";
import Libro from "./Libro";
import Card from "./Card";
//5. Usar componente


const Home = () => {
	return (
		<>
			<h1>Header</h1>
			<Nav />
			<Card usuario='auronplay' message='mira eta broma telefonica del coche' likes='2.3M' color='red'/>
			<Card usuario='isaac_artur' message='como vamos a vivir los humanos en el año 2500' likes='10k' color='red'/>
			<Card usuario='mrBeast' message='vamos a darle una casa a 100 persona' likes='10M' color='red'/>
			<Jumbotron />
			<div className="text-center">
				<h1 className="text-center mt-5">Hola bienvenidos a React :)123</h1>
				<Libro />
			</div>
			<h1>Footer</h1>
		</>
	);
};

export default Home;