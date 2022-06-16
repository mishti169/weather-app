import { useHistory } from 'react-router-dom';
import ArrowDownLogo from '../../assets/icons/arrow-down.svg';
import ArrowUpLogo from '../../assets/icons/arrow-up.svg';
import CloudRainLogo from '../../assets/icons/cloud-rain.svg';
import MapLogo from '../../assets/icons/map.svg';
import SettingsLogo from '../../assets/icons/settings.svg';
import SunRiseLogo from '../../assets/icons/sunrise.svg';
import SunSetLogo from '../../assets/icons/sunset.svg';
import './Home.css';

const Home = () => {
	const history = useHistory();
	const handleClick = () => {
		history.push('/location');
	};

	return (
		<div className='home'>
			<div className='home--header'>
				<div className='home--header_text'>
					<span className='home--header_city'>Mumbai</span>
					<span className='home--header_location'>current Location </span>
				</div>
				<div className='home--header_icon'>
					<img onClick={handleClick} width={21} height={21} src={MapLogo} />
					<img width={21} height={21} src={SettingsLogo} />
				</div>
			</div>
			<span className='home--body_in-sync'>in sync</span>
			<div className='home--body'>
				<div className='home--body_details'>
					<span className='home--body_date'>Friday, 25 December 2020</span>
					<span className='home--body_temp'>22℃</span>
					<div className='home--body_temp_summary'>
						<div className='home--body_temp_summary--detail'>
							<img width={21} src={ArrowDownLogo} />
							<span>16℃</span>
						</div>
						<div className='home--body_temp_summary--detail'>
							<img width={21} src={ArrowUpLogo} />
							<span>26℃</span>
						</div>
					</div>
				</div>
				<div className='home--body_icon-and-text'>
					<img width={128} src={CloudRainLogo} />
					<span>Light Drizzle</span>
				</div>
				<div className='home--body--time-container'>
					<div className='home--body--time-container_icon-and-time'>
						<img width={21} src={SunRiseLogo} alt='sunrise' />
						<span>09:18 AM</span>
					</div>
					<div className='home--body--time-container_icon-and-time'>
						<img width={21} src={SunSetLogo} alt='sunset' />
						<span>06:18 PM</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
