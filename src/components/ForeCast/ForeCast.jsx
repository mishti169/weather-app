import React from 'react';
import Header from '../Header/Header';
import Daily from '../Daily/Daily';
import Hourly from '../Hourly/Hourly';
import './ForeCast.css';
import Splash from '../Splash/Splash';
import { useWeather } from '../../hooks/useWeather';

const ForeCast = (props) => {
	const { data: weatherData, loading } = props;
	if (loading) {
		return <Splash />;
	}

	return (
		<div className='forecast'>
			<Header weatherData={weatherData} />
			<div className='forecast--body'>
				<span className='forecast--body-heading'>Forecast</span>
				<Hourly weatherData={weatherData} />
				<Daily weatherData={weatherData} />
			</div>
		</div>
	);
};
export default ForeCast;
