/** @format */

import { ButtonGroup, Typography } from '@mui/material';
import React from 'react';
import Fieldset from './Fieldset.js';
import Heading from './Heading.js';

const Controls = ({ children, title }) => {
	return (
		<ButtonGroup
			variant='contained'
			aria-label='history button group'
			color='primary'
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignContent: 'center',
				justifyContent: 'space-between',
				flexWrap: 'wrap',
				borderRadius: '0',
				bgcolor: '#35393C',
			}}>
			{children}
		</ButtonGroup>
	);
};

export default Controls;
