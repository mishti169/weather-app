import React from 'react';
import './TempDetails.css';

const TempDetails = (props) => {
	return (
		<div className='temp-details'>
			<span className='temp-details_title'>{props.title}</span>
			<span className='temp-details_description'>{props.description}</span>
		</div>
	);
};
export default TempDetails;
