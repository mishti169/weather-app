import React from 'react';
import ChevronLeftLogo from '../../assets/icons/chevron-left.svg';
import PlusLogo from '../../assets/icons/plus.svg';
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
			<div></div>
		</div>
	);
};

export default Location;
