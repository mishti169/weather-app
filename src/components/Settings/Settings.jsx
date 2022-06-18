import React from 'react';
import './Settings.css';
import ChevronLeftLogo from '../../assets/icons/chevron-left.svg';

const Settings = () => {
	return (
		<div className='settings'>
			<div className='setting--header'>
				<img width={21} src={ChevronLeftLogo} alt='left-chevron' />
				<span className='setting--header_title'>Settings</span>
			</div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Settings;
