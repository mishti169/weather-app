import { useHistory } from 'react-router-dom';
import ChevronLeftLogo from '../../assets/icons/chevron-left.svg';
import PlusLogo from '../../assets/icons/plus.svg';
import CityTemperature from '../CityTemperature/CityTemperature';
import './Location.css';

const Location = () => {
	const history = useHistory();
	const handleClick = () => {
		history.push('/home');
	};
	return (
		<div className='location'>
			<div className='location--header'>
				<div onClick={handleClick} className='location--header_text-icon'>
					<img src={ChevronLeftLogo} width={21} className='chevron-left' />
					<span>Select City</span>
				</div>
				<img src={PlusLogo} width={21} className='location--header_plus-icon' />
			</div>
			<CityTemperature />
		</div>
	);
};

export default Location;
