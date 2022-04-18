/** @format */

import * as React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MainSection from './MainSection.js';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && <Box sx={{ p: 1 }}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

export default function FullWidthTabs({ tabLabels, children, title, level }) {
	const theme = useTheme();
	const [value, setValue] = React.useState(tabLabels[0].id);
	const [prevValue, setPrevValue] = React.useState(null);
	const [currentLevel, setCurrentLevel] = React.useState(level);

	React.useEffect(() => {
		// setCurrentLevel(level);
		setPrevValue(value);
		setValue(null);
	}, [tabLabels, level]);

	React.useEffect(() => {
		if (value === null) {
			let valueExists = false;
			tabLabels.forEach(({ id }) => {
				if (id === prevValue) valueExists = true;
			});

			// console.log(valueExists);
			if (!valueExists) setValue(tabLabels[0].id);
			else setValue(prevValue);
			// setValue(tabLabels[0].id);
		}
		return () => {};
	}, [tabLabels, value]);
	const handleChange = (event, newValue) => {
		const uId = parseInt(event.target.id.split('-').pop());
		setValue(uId);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};
	if (value === null) return null;

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				bgcolor: 'background.paper',
				// margin: '20px',
				// borderRadius: '0 0 10px 10px',
			}}>
			<AppBar position='static'>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='inherit'
					variant='fullWidth'
					aria-label='full width tabs example'>
					{tabLabels.map(({ label, id }, index) => (
						<Tab value={id} key={index} label={label} {...a11yProps(id)} />
					))}
				</Tabs>
			</AppBar>
			{children.map((child, index) => (
				<TabPanel
					style={{ height: '100%' }}
					value={value}
					index={index}
					key={index}
					dir={theme.direction}>
					{child}
				</TabPanel>
			))}
		</Box>
	);
}
