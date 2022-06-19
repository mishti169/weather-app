import { useHistory } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';
import Header from '../Header/Header';
import TempDetails from '../TempDetails/TempDetails';
import Splash from '../Splash/Splash';
import './Details.css';

const Details = () => {
	const history = useHistory();
	const { data: weatherData, loading } = useWeather();

	if (loading) {
		return <Splash />;
	}

	const {
		forecast: { forecastday },
	} = weatherData;
	const [firstItem] = forecastday;
	const { day } = firstItem;

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
					<TempDetails title='Precipitation' description={day.totalprecip_mm} />
					<TempDetails title='Precipitation' description={day.totalprecip_mm} />
					<TempDetails title='Precipitation' description={day.totalprecip_mm} />
					<TempDetails title='Precipitation' description={day.totalprecip_mm} />
					<TempDetails title='Precipitation' description={day.totalprecip_mm} />
					<TempDetails title='Precipitation' description={day.totalprecip_mm} />
				</div>
			</div>
		</div>
	);
};

export default Details;
