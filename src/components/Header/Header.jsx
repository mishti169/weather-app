import MapLogo from '../../assets/icons/map.svg';
import SettingsLogo from '../../assets/icons/settings.svg';

import { useHistory } from 'react-router-dom';
import './Header.css';
const Header = (props) => {
	const history = useHistory();
	const { weatherData } = props;

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
	return (
		<div className='header'>
			<div className='header--text'>
				<span className='header_city'>{location.name}</span>
				<span className='header_location'>current Location </span>
			</div>
			<div className='header--icon'>
				<img onClick={handleClick} width={21} height={21} src={MapLogo} />
				<img onClick={goToSettings} width={21} height={21} src={SettingsLogo} />
			</div>
		</div>
	);
};

export default Header;
