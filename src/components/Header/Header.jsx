import { useHistory } from 'react-router-dom';
import MapIcon from '../Icons/MapIcon';
import SettingsIcon from '../Icons/SettingsIcon';
import MoonIcon from '../Icons/MoonIcon';
import './Header.css';
import SunIcon from '../Icons/SunIcon';
import { useState } from 'react';

const Header = (props) => {
	const history = useHistory();
	const { weatherData } = props;
	const [isDark, setIsDark] = useState(false);

	if (!weatherData) {
		return null;
	}

	const { location } = weatherData;

	const handleClick = () => {
		history.push('/location');
	};

	const goToSettings = () => {
		history.push('/settings');
	};
	const applyDarkMode = () => {
		const body = document.querySelector('body');
		setIsDark(body.classList.toggle('dark-mode'));
	};
	return (
		<div className='header'>
			<div className='header--text'>
				<span className='header_city'>{location.name}</span>
				<span className='header_location'>current Location </span>
			</div>
			<div className='header--icon'>
				{isDark ? (
					<SunIcon onClick={applyDarkMode} width={21} height={21} />
				) : (
					<MoonIcon onClick={applyDarkMode} width={21} height={21} />
				)}
				<MapIcon onClick={handleClick} width={21} height={21} />
				<SettingsIcon onClick={goToSettings} width={21} height={21} />
			</div>
		</div>
	);
};

export default Header;
