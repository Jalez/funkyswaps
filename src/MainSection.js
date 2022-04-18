/** @format */

import React from 'react';
import Fieldset from './Fieldset.js';

const MainSection = ({ children, title, color }) => {
	return (
		<Fieldset headingLevel={2} title={title} backgroundColor={'#6096ba'}>
			{children}
		</Fieldset>
	);
};

export default MainSection;
