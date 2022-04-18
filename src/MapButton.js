/** @format */

import { Button } from '@mui/material';
import React from 'react';
import Icon from './Icon.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/system';
import { cleanupArray } from './tools/cleanupArray.js';

const MapButton = ({
	from,
	to,
	badges,
	badgeChanger,
	historyChanger,
	history,
}) => {
	const mapButtonClickHandler = () => {
		// Check if the given badge exists in badges
		const filterFunction = (value) => {
			if (Array.isArray(value)) {
				return value.filter((val_ii) => val_ii === from);
			}
			return value === from;
		};
		if (badges.filter(filterFunction).length) {
			const newHistory = history.slice(
				0,
				history.findIndex((oldBadges) => oldBadges === badges) + 1
			);
			// Get newBadges collection
			let newBadges = [];
			badges.map((b_i) => {
				if (Array.isArray(b_i)) {
					const newArrayInside = [];
					b_i.map((b_ii) => {
						if (Array.isArray(to)) {
							return b_ii === from
								? newArrayInside.push(...to)
								: newArrayInside.push(b_ii);
						}
						return b_ii === from
							? newArrayInside.push(to)
							: newArrayInside.push(b_ii);
					});
					return newBadges.push(newArrayInside);
				}
				if (Array.isArray(to)) {
					return b_i === from ? newBadges.push(to) : newBadges.push(b_i);
				}
				return b_i === from ? newBadges.push(to) : newBadges.push(b_i);
			});
			newBadges = cleanupArray(newBadges);
			if (JSON.stringify(newBadges) !== JSON.stringify(badges)) {
				// Add new badges to history
				newHistory.push(newBadges);
				historyChanger([...newHistory]);
				// Change current badges
				badgeChanger(newBadges);
			}
		}
	};

	return (
		<Button
			variant='text'
			sx={{ flex: '1 1 auto' }}
			onClick={mapButtonClickHandler}
			style={{ margin: '0.1rem' }}>
			<Icon iconName={from} size={2} opacity={1} />
			<ArrowForwardIcon
				style={{ width: '2rem', height: '2rem', color: 'white' }}
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
				{Array.isArray(to) ? (
					to.map((t, i) => <Icon key={i} iconName={t} size={2} opacity={1} />)
				) : (
					<Icon iconName={to} size={2} opacity={1} />
				)}
			</Box>
		</Button>
	);
};

export default MapButton;
