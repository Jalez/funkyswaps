/** @format */

import React from 'react';

const Icon = ({ iconName, size, opacity }) => {
	return (
		<img
			src={process.env.PUBLIC_URL + '/svg/fp_game/misc/' + iconName + '.svg'}
			alt={iconName}
			style={{
				width: `${size}rem`,
				opacity: opacity,
			}}
		/>
	);
};

export default Icon;
