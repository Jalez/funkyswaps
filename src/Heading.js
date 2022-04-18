/** @format */

import { Typography } from '@mui/material';
import React from 'react';

const Heading = ({ type, backgroundColor, children }) => {
	const getSize = (type) => {
		if (type === 1) {
			return '3rem';
		} else if (type === 2) {
			return '1.5rem';
		} else if (type === 3) {
			return '1rem';
		}
	};

	const getDecoration = (type) => {
		if (type === 1) {
			return 'underline';
		} else if (type === 2) {
			return 'underline';
		} else if (type === 3) {
			return 'none';
		}
	};

	const getDecorationThickness = (type) => {
		if (type === 1) {
			return '0.2rem';
		} else if (type === 2) {
			return '0.1rem';
		} else if (type === 3) {
			return 'none';
		}
	};

	const styling = {
		fontSize: getSize(type),
		// textDecoration: getDecoration(type),
		textDecorationThickness: getDecorationThickness(type),
		// borderRadius: '1rem',
		// margin: '0.2rem',
		width: '100%',
		fontWeight: 'bold',
		color: 'white',
		// bgcolor: 'background.headers',
	};

	return (
		<Typography variant={`h${type}`} component='header' sx={styling}>
			{children}
		</Typography>
	);
};

export default Heading;
