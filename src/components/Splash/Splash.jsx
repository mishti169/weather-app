import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Splash.css';
import axios from 'axios';

const Splash = () => {
	const [location, setLocation] = useState(null);
	const history = useHistory();
	useEffect(() => {
		getLocation();
	}, []);

	useEffect(() => {
		if (location) {
			axios.get(`https://api.weatherapi.com/v1/forecast.json?key=eacf688b839549519dc105316221806&q=${location.lat},${location.lng}&days=10&aqi=no&alerts=no
	`);
		}
	}, [location]);

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			return null;
		}
	};
	const showPosition = (position) => {
		setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
	};
	return (
		<div className='weather-container'>
			<div className='weather-text'>Weather</div>
			<div className='weather-footer'>A minimal weather app</div>
		</div>
	);
};

export default Splash;
