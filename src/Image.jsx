/** @format */

import React from 'react';

const Image = ({ imageName, width, opacity = 1 }) => {
	return (
		<img
			src={process.env.PUBLIC_URL + '/jpg/' + imageName + '.jpg'}
			alt={imageName}
			style={{
				width: width ? `${width}rem` : 'auto',
				opacity: opacity,
			}}
		/>
	);
};

export default Image;
