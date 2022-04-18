/** @format */

import { Button } from '@mui/material';
import React from 'react';

const FinishButton = ({ completedLevels }) => {
	const finishButtonClickHandler = () => {
		const message = JSON.stringify({
			message: 'Hello from Funky Swaps: submitting for grading',
			type: 'submitting',
			data: completedLevels,
			date: Date.now(),
		});
		window.parent.postMessage(message, '*');
	};

	return (
		<Button
			variant='outlined'
			onClick={finishButtonClickHandler}
			style={{ margin: '0.1rem' }}>
			Submit for grading
		</Button>
	);
};

export default FinishButton;
