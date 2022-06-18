import React from 'react';
import './Settings.css';
import ChevronLeftLogo from '../../assets/icons/chevron-left.svg';
import { useHistory } from 'react-router-dom';

const Settings = () => {
	const history = useHistory();
	const handleClick = () => {
		history.push('/home');
	};
	return (
		<div className='settings'>
			<div onClick={handleClick} className='settings--header'>
				<img width={21} src={ChevronLeftLogo} alt='left-chevron' />
				<span className='settings--header_title'>Settings</span>
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
			<div className='settings--headings'>
				<span className='settings-titles'>About</span>
				<div className='settings--titles--body'>
					<span className='settings--titles_sub-titles'>About Weather</span>
					<span className='settings--titles_sub-titles_text'>Read a bit more about the app.</span>
				</div>
				<div className='settings--titles--body'>
					<span className='settings--titles_sub-titles'>The Team</span>
					<span className='settings--titles_sub-titles_text'>Get to know the team that made Weather a reality.</span>
				</div>
			</div>
		</div>
	);
};

export default Settings;
