import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Splash.css';
import axios from 'axios';
import { weather } from '../../globalAtom';
import { useAtom } from 'jotai';

const Splash = () => {
	const [location, setLocation] = useState(null);
	const [, setWeatherData] = useAtom(weather);
	const history = useHistory();

	const fetchWeather = async () => {
		const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${
			import.meta.env.VITE_API_KEY
		}&q=${location.lat},${location.lng}&days=10&aqi=no&alerts=no
	`);
		return data;
	};

	useEffect(() => {
		getLocation();
	}, []);

	useEffect(() => {
		if (location) {
			const data = fetchWeather();
			console.log(data);
			setWeatherData(data);

			history.push('/home');
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
