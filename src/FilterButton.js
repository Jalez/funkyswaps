/** @format */

import React from 'react';

import { Button } from '@mui/material';
import Icon from './Icon.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import { cleanupArray } from './tools/cleanupArray.js';
const FilterButton = ({
	target,
	badges,
	badgeChanger,
	historyChanger,
	history,
}) => {
	const filterButtonClickHandler = () => {
		// Check if the given badge exists in badges
		const filterFunction = (value) => {
			if (Array.isArray(value)) {
				return value.filter((val_ii) => val_ii === target);
			}
			return value === target;
		};
		if (badges.filter(filterFunction).length) {
			const newHistory = history.slice(
				0,
				history.findIndex((oldBadges) => oldBadges === badges) + 1
			);
			// Get newBadges collection

			let newBadges = [...badges];
			for (let index = 0; index < badges.length; index++) {
				if (Array.isArray(newBadges[index])) {
					newBadges[index] = newBadges[index].filter((b_ii) => b_ii !== target);
				}
			}
			newBadges = newBadges.filter((b_i) => b_i !== target);
			newBadges = cleanupArray(newBadges);
			// Add new badges to history
			newHistory.push(newBadges);
			historyChanger([...newHistory]);
			// Change current badges
			badgeChanger(newBadges);
		}
	};

	return (
		<Button
			sx={{ flex: '1 1 auto' }}
			variant='text'
			onClick={filterButtonClickHandler}
			style={{ margin: '0.1rem' }}>
			<Icon iconName={target} size={2} opacity={1} />
			<ArrowForwardIcon
				style={{ width: '2rem', height: '2rem', color: 'white' }}
			/>
			<DeleteIcon style={{ width: '2rem', height: '2rem', color: 'white' }} />
		</Button>
	);
};

export default FilterButton;
