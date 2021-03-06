import { useHistory } from 'react-router-dom';
import { getHomeScreenDate, getWeatherIcon } from '../../util/utils';
import Header from '../Header/Header';
import ArrowDownIcon from '../Icons/ArrowDownIcon';
import ArrowUpIcon from '../Icons/ArrowUpIcon';
import SunRiseIcon from '../Icons/SunRiseIcon';
import SunSetIcon from '../Icons/SunSetIcon';
import Splash from '../Splash/Splash';
import './Home.css';

const Home = (props) => {
	const history = useHistory();
	const { data: weatherData, loading } = props;
	if (loading) {
		return <Splash />;
	}

	const {
		current,
		forecast: { forecastday: forecastDay },
	} = weatherData;

	const handleClick = () => {
		history.push('/details');
	};

	const getIcon = (code) => {
		const Icon = getWeatherIcon(code);
		return <Icon width={128} height='auto' className='home-weather-icon' />;
	};

	return (
		<div className='home'>
			<Header weatherData={weatherData} />
			<span className='home--body_in-sync'>in sync</span>
			<div onClick={handleClick} className='home--body'>
				<div className='home--body_details'>
					<span className='home--body_date'>{getHomeScreenDate(forecastDay[0].date)}</span>
					<span className='home--body_temp'>{current.temp_c}℃</span>
					<div className='home--body_temp_summary'>
						<div className='home--body_temp_summary--detail'>
							<ArrowDownIcon width={21} />
							<span>{forecastDay[0].day.mintemp_c}℃</span>
						</div>
						<div className='home--body_temp_summary--detail'>
							<ArrowUpIcon width={21} />
							<span>{forecastDay[0].day.maxtemp_c}℃</span>
						</div>
					</div>
				</div>
				<div className='home--body_icon-and-text'>
					{getIcon(current.condition.code)}
					<span>{current.condition.text}</span>
				</div>
				<div className='home--body--time-container'>
					<div className='home--body--time-container_icon-and-time'>
						<SunRiseIcon width={21} />
						<span>{forecastDay[0].astro.sunrise}</span>
					</div>
					<div className='home--body--time-container_icon-and-time'>
						<SunSetIcon width={21} />
						<span>{forecastDay[0].astro.sunset}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
