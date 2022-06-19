import ArrowDownLogo from '../../assets/icons/arrow-down.svg';
import ArrowUpLogo from '../../assets/icons/arrow-up.svg';
import CloudRainLogo from '../../assets/icons/cloud-rain.svg';
import { useHistory } from 'react-router-dom';
import SunRiseLogo from '../../assets/icons/sunrise.svg';
import SunSetLogo from '../../assets/icons/sunset.svg';
import Header from '../Header/Header';
import './Home.css';
import { useAtom } from 'jotai';
import { weather } from '../../globalAtom';

const Home = () => {
	const history = useHistory();
	const [weatherData] = useAtom(weather);
	const {
		current,
		forecast: { forecastday: forecastDay },
	} = weatherData;

	const handleClick = () => {
		history.push('/details');
	};

	return (
		<div className='home'>
			<Header />
			<span className='home--body_in-sync'>in sync</span>
			<div onClick={handleClick} className='home--body'>
				<div className='home--body_details'>
					<span className='home--body_date'>{forecastDay[0].date}</span>
					<span className='home--body_temp'>{current.temp_c}℃</span>
					<div className='home--body_temp_summary'>
						<div className='home--body_temp_summary--detail'>
							<img width={21} src={ArrowDownLogo} />
							<span>{forecastDay[0].day.mintemp_c}℃</span>
						</div>
						<div className='home--body_temp_summary--detail'>
							<img width={21} src={ArrowUpLogo} />
							<span>{forecastDay[0].day.maxtemp_c}℃</span>
						</div>
					</div>
				</div>
				<div className='home--body_icon-and-text'>
					<img width={128} src={CloudRainLogo} />
					<span>{current.condition.text}</span>
				</div>
				<div className='home--body--time-container'>
					<div className='home--body--time-container_icon-and-time'>
						<img width={21} src={SunRiseLogo} alt='sunrise' />
						<span>{forecastDay[0].astro.sunrise}</span>
					</div>
					<div className='home--body--time-container_icon-and-time'>
						<img width={21} src={SunSetLogo} alt='sunset' />
						<span>{forecastDay[0].astro.sunset}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
