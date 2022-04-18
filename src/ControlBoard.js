/** @format */

import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Heading from './Heading.js';
import MainSection from './MainSection.js';

const ControlBoard = ({ children }) => {
	return (
		<MainSection title='Controls'>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					flexWrap: 'wrap',
				}}>
				{children}
			</Box>
		</MainSection>
	);
};

export default ControlBoard;
