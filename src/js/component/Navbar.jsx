import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Star-Wars-Logo-1.png";
import "../../styles/home.css";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 px-3">
			<Link to="/">
				<img src={logo} 
				style={{width: "10%", height: "auto", maxWidth: "1000px" }} />
				
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning">Favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
