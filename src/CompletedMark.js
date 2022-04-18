/** @format */

import React from 'react';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const CompletedMark = ({ isCompleted }) => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }} gap={2}>
			<Typography>Completed:</Typography>
			{isCompleted ? (
				<ThumbUpIcon style={{ color: 'green', fontSize: '20' }} />
			) : (
				<ThumbDownIcon style={{ color: 'red', fontSize: '20' }} />
			)}{' '}
		</Box>
	);
};

export default CompletedMark;
