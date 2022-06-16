import React from 'react';
import ChevronLeftLogo from '../../assets/icons/chevron-left.svg';
import PlusLogo from '../../assets/icons/plus.svg';
import CloudRainLogo from '../../assets/icons/cloud-rain.svg';
import './Location.css';

const Location = () => {
	return (
		<div className='location'>
			<div className='location--header'>
				<div className='location--header_text-icon'>
					<img src={ChevronLeftLogo} width={21} className='chevron-left' />
					<span>Select City</span>
				</div>
				<img src={PlusLogo} width={21} className='location--header_plus-icon' />
			</div>
			<div className='location--body'>
				<div className='location--body--details '>
					<span className='location--body--details_city'>Mumbai</span>
					<span className='location--body--details_temp'>22°C</span>
					<span className='location--body--details_temp-text'>Light Drizzle</span>
				</div>
				<img width={40} src={CloudRainLogo} alt='raining' srcset='' />
			</div>
		</div>
	);
};

export default Location;
