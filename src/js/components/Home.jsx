import React from "react";


//4. Importar compoonente
import Nav from "./nav";
import Jumbotron from "./Jumbotron";
import Libro from "./Libro";

//5. Usar componente


const Home = () => {
	return (
		<>
			<h1>Header</h1>
			<Nav />
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