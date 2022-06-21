import { useWeather } from '../../hooks/useWeather';
import { getWeatherIcon } from '../../util/utils';
import './CityTemperature.css';

const CityTemperature = (props) => {
	const { location } = props;
	const { loading, data: weatherData } = useWeather(location);

	if (loading) {
		return <div>Loading...</div>;
	}

	const getIcon = (code) => {
		const Icon = getWeatherIcon(code);
		return <Icon width={40} />;
	};

	return (
		<div className='city-temp'>
			<div className='city-temp--details '>
				<span className='city-temp--details_city'>{weatherData?.location?.name}</span>
				<span className='city-temp--details_temp'>{weatherData?.current?.temp_c}°C</span>
				<span className='city-temp--details_temp-text'>{weatherData?.current?.condition?.text}</span>
			</div>
			{getIcon(weatherData.current.condition.code)}
		</div>
	);
};
export default CityTemperature;
