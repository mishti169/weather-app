import { useHistory } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';
import Header from '../Header/Header';
import TempDetails from '../TempDetails/TempDetails';
import Splash from '../Splash/Splash';
import './Details.css';

const Details = (props) => {
	const history = useHistory();
	const { data: weatherData, loading } = props;

	if (loading) {
		return <Splash />;
	}

	const { current } = weatherData;

	const handleClick = () => {
		history.push('/forecast');
	};

	return (
		<div className='details'>
			<Header weatherData={weatherData} />
			<div className='details--body'>
				<div className='details--body_text'>
					<span className='details--body_text-1'>Details</span>
					<span onClick={handleClick} className='details--body_text-2'>
						Forecast
					</span>
				</div>
				<div className='details--body_inner-body'>
					<TempDetails title='Precipitation' description={`${current.precip_mm} mm`} />
					<TempDetails title='SE Wind' description={`${current.wind_kph} km/h`} />
					<TempDetails title='Humidity' description={`${current.humidity} %`} />
					<TempDetails title='Visibility' description={`${current.vis_km} km`} />
					<TempDetails title='UV' description={current.uv} />
					<TempDetails title='Pressure' description={`${current.pressure_mb} hPa`} />
				</div>
			</div>
		</div>
	);
};

export default Details;
