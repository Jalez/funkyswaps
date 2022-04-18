/** @format */

import { Box } from '@mui/material';
import React from 'react';

const Column = ({ children, number }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column-reverse',
				// height: '100%',
			}}
			className={'column-' + number}>
			<div
				style={{
					width: `${3}rem`,
					height: `${3}rem`,
					fontSize: '2rem',
					color: 'white',
					borderTop: '5px solid white',
					borderRight: typeof number !== 'number' && '5px solid white',
				}}>
				{number}
			</div>
			{children}
		</Box>
	);
};

export default Column;
