import axios from 'axios';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { weather } from '../globalAtom';

export const useWeather = () => {
	const [weatherData, setWeatherData] = useAtom(weather);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [location, setLocation] = useState(null);

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

	const fetchWeather = async () => {
		try {
			const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${
				import.meta.env.VITE_API_KEY
			}&q=${location.lat},${location.lng}&days=10&aqi=no&alerts=no
    `);
			setLoading(false);
			setWeatherData(data);
		} catch (e) {
			console.error(e);
			setError(true);
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	useEffect(() => {
		if (location && !weatherData) {
			fetchWeather();
		}
	}, [location]);

	return { loading, error, data: weatherData };
};
