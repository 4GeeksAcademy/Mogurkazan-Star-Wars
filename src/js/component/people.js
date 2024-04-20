import React, { Component, useState } from "react";


export const Gente = () => {
	const [name, setName] = useState({})
	handleName = () => {
		setName(data)
	}
	fetch("https://www.swapi.tech/api/people/1/")
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.error(err))
	return (
		<p>name</p>
	);
};