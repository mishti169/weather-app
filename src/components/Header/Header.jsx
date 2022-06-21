import { useHistory } from 'react-router-dom';
import MapIcon from '../Icons/MapIcon';
import SettingsIcon from '../Icons/SettingsIcon';
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
				<MapIcon onClick={handleClick} width={21} height={21} />
				<SettingsIcon onClick={goToSettings} width={21} height={21} />
			</div>
		</div>
	);
};

export default Header;
