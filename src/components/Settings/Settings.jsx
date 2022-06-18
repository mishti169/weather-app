import React from 'react';
import './Settings.css';
import ChevronLeftLogo from '../../assets/icons/chevron-left.svg';

const Settings = () => {
	return (
		<div className='settings'>
			<div className='settings--header'>
				<img width={21} src={ChevronLeftLogo} alt='left-chevron' />
				<span className='setting--header_title'>Settings</span>
			</div>
			<div className='settings--headings'>
				<span className='settings-titles'>Theme</span>
				<div className='settings--titles--body'>
					<span className='settings--titles_sub-titles'>Dark Theme</span>
					<span className='settings--titles_sub-titles_text'>Join the Dark Side!</span>
				</div>
				<div className='settings--titles--body'>
					<span className='settings--titles_sub-titles'>Light Theme</span>
					<span className='settings--titles_sub-titles_text'>Let There be Light!</span>
				</div>
			</div>
			<div className='settings--headings'>
				<span className='settings-titles'>Feedback</span>
				<div className='settings--titles--body'>
					<span className='settings--titles_sub-titles'>Report an Issue</span>
					<span className='settings--titles_sub-titles_text'>Facing an issue? Report and we’ll look into it.</span>
				</div>
				<div className='settings--titles--body'>
					<span className='settings--titles_sub-titles'>Rate on App Store</span>
					<span className='settings--titles_sub-titles_text'>Enjoying the app? Leave a review on the App Store.</span>
				</div>
			</div>
		</div>
	);
};

export default Settings;
