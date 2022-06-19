import React from 'react';
import Header from '../Header/Header';
import Daily from '../Daily/Daily';
import Hourly from '../Hourly/Hourly';
import './ForeCast.css';
import Splash from '../Splash/Splash';
import { useWeather } from '../../hooks/useWeather';

const ForeCast = () => {
	const { data: weatherData, loading } = useWeather();

	if (loading) {
		return <Splash />;
	}

	return (
		<div className='forecast'>
			<Header weatherData={weatherData} />
			<div className='forecast--body'>
				<span className='forecast--body-heading'>Forecast</span>
				<Hourly />
				<Daily />
			</div>
		</div>
	);
};
export default ForeCast;
