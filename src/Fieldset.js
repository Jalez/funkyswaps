/** @format */

import React from 'react';
import Heading from './Heading.js';

const Fieldset = ({
	title,
	headingLevel,
	backgroundColor,
	children,
	borderColor,
}) => {
	return (
		// <fieldset
		// 	style={{
		// 		// borderWidth: '0.2rem',
		// 		borderColor: borderColor || '#1a759f',
		// 		borderRadius: '1rem',
		// 		borderStyle: 'none',
		// 		backgroundColor: backgroundColor,
		// 		position: 'relative',
		// 		marginTop: '35px',
		// 		marginLeft: '20px',
		// 		marginBottom: '20px',
		// 		marginRight: '20px',
		// 	}}>
		<div style={{ width: '100%' }}>
			<legend style={{}}>
				<Heading type={headingLevel}>{title}</Heading>
			</legend>
			{children}
		</div>
		// </fieldset>
	);
};

export default Fieldset;
