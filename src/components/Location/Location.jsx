import { useHistory } from 'react-router-dom';
import CityTemperature from '../CityTemperature/CityTemperature';
import ChevronLeftIcon from '../Icons/ChevronLeftIcon';
import PlusIcon from '../Icons/PlusIcon';
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
					<ChevronLeftIcon width={21} className='chevron-left' />
					<span>Select City</span>
				</div>
				<PlusIcon width={21} className='location--header_plus-icon' />
			</div>
			<CityTemperature />
			<CityTemperature />
			<CityTemperature />
		</div>
	);
};

export default Location;
