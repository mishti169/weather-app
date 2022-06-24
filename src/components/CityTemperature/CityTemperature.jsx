import { useWeather } from '../../hooks/useWeather';
import { useHistory } from 'react-router-dom';
import { getWeatherIcon } from '../../util/utils';
import './CityTemperature.css';
import { useAtom } from 'jotai';
import { weather } from '../../globalAtom';

const CityTemperature = (props) => {
	const [, setWeatherData] = useAtom(weather);

	const history = useHistory();
	const { location } = props;
	const { loading, data: weatherData } = useWeather(location);
	if (loading) {
		return <div>Loading...</div>;
	}
	const getIcon = (code) => {
		const Icon = getWeatherIcon(code);
		return <Icon width={40} />;
	};

	const handleClick = () => {
		setWeatherData({ data: weatherData, loading: false, error: false });
		history.push('/home');
	};
	return (
		<div onClick={handleClick} className='city-temp'>
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
