import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
// import weather from '../globalAtom';

export const useWeather = (loc) => {
	// const [weatherData, setWeatherData] = useAtom(weather);
	const [weatherData, setWeatherData] = useState(null);

	const [loading, setLoading] = useState(weatherData ? false : true);
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

	const getQuery = () => {
		const q = loc ? loc : `lat=${location.lat}&lon=${location.lng}`;
		return `https://api.weatherapi.com/v1/forecast.json?key=${
			import.meta.env.VITE_API_KEY
		}&q=${q}&days=10&aqi=no&alerts=no
    `;
	};

	const fetchWeather = async () => {
		try {
			const query = getQuery();
			const { data } = await axios.get(query);
			setLoading(false);
			setWeatherData(data);
		} catch (e) {
			console.error(e);
			setError(true);
		}
	};

	useEffect(() => {
		if (!loc) {
			getLocation();
			return;
		}
		setLocation(loc);
	}, []);

	useEffect(() => {
		if (location && !weatherData) {
			fetchWeather();
		}
	}, [location]);

	useEffect(() => {
		if (weatherData && loading) {
			setLoading(false);
		}
	}, [weatherData]);

	return { loading, error, data: weatherData };
};
