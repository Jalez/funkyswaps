/** @format */

import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const LevelControls = ({ maxLevels, levelHandler, currentlevel }) => {
	const decreaseLevel = () => {
		levelHandler(currentlevel - 1);
	};

	const increaseLevel = () => {
		levelHandler(currentlevel + 1);
	};

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<IconButton disabled={currentlevel === 1} onClick={decreaseLevel}>
				<ArrowBackIosIcon />
			</IconButton>
			<Typography style={{ fontSize: '1.5rem', display: 'inline' }}>
				<strong>
					Level {currentlevel} of {maxLevels}
				</strong>
			</Typography>
			<IconButton disabled={currentlevel === maxLevels} onClick={increaseLevel}>
				<ArrowForwardIosIcon />
			</IconButton>
		</Box>
	);
};

export default LevelControls;
