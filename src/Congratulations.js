/** @format */

import { Backdrop, Button, Fade, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const style = {
	bgcolor: 'background.paper',
	p: 4,
};

const congratulations = {
	1: {
		heading: 'Congratulations, first level passed!',
		content: [
			'Easy points in the pocket! You can now move on to the next level.',
		],
	},
	2: {
		heading: 'Congratulations, level passed!',
		content: [
			"That was a bit trickier, wasn't it? You can now move on to the next level.",
		],
	},
	3: [],
	4: [],
	5: [],
	6: [],
	7: [],
	8: [],
	9: [],
	10: [],
	11: [],
	12: [],
	13: [],
	14: [],
	15: [],
};

const Congratulations = ({ level, levelHandler }) => {
	return (
		<Box sx={style}>
			<Typography
				id='transition-modal-title'
				variant='h3'
				component='h3'
				fontSize={20}>
				{congratulations[level].heading}
			</Typography>
			<Typography id='transition-modal-description' sx={{ mt: 2 }}>
				{congratulations[level].content}
			</Typography>
			{level !== 15 && (
				<Button onClick={(e) => levelHandler(level + 1)} variant='contained'>
					Move to Level {level + 1}
				</Button>
			)}
		</Box>
	);
};

export default Congratulations;
