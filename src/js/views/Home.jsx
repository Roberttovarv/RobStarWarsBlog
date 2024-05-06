import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const Home = () => {
const [characters, setCharacters] = useState([])
const [planets, setPlanets] = useState([])
const host = "https://swapi.dev/api";

const fetchCharacters = async () => {
	const uri = `${host}/people/`
	const options =  { method: "GET" }

	const response = await fetch(uri, options)

	if (!response.ok) {
		console.log("Error", response.status, response.statusText);
		return
	};

	const data = await response.json()
	setCharacters(data.results)
};

const fetchSpheres = async () => {
	const uri = `${host}/planets/`
	const options =  { method: "GET" }

	const response = await fetch(uri, options)

	if (!response.ok) {
		console.log("Error", response.status, response.statusText);
		return
	};

	const data = await response.json()
	setPlanets(data.results)
};

useEffect(() => {
	fetchCharacters();
	fetchSpheres();
}, []);

	return (
	<div>
		<div className="row">
		<h1>Characters</h1>
		{characters.map((item, index) => (
			<div className="card" style={{width: "18rem"}} key={index}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<span className="card-text">Gender: {item.gender}</span><br />
				<span className="card-text">Hair color: {item.hair_color}</span><br />
				<span className="card-text">Eye color: {item.eye_color}</span><br />
				<Link to={`/${item.id}`} className="btn btn-primary">Más Info</Link>
			</div>
		</div>
		))}
		</div>
		<div className="row">
		<h1>Planets</h1>
		{planets.map((item, index) => (
			<div className="card" style={{width: "18rem"}} key={index}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<span className="card-text">Gender: {item.population}</span><br />
				<span className="card-text">Hair color: {item.terrain}</span><br />
				<span className="card-text">Eye color: {item.climate}</span><br />
				<Link to={`/${item.id}`} className="btn btn-primary">Más Info</Link>
			</div>
		</div>
		))}
		</div>
	</div>
);
};
