/** @format */

import React from 'react';

import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/system';
import TokenIcon from '@mui/icons-material/Token';
import DeleteIcon from '@mui/icons-material/Delete';
import { cleanupArray } from './tools/cleanupArray.js';
import { transpose } from './tools/transpose.js';
import { reduceColumnCombos } from './tools/reduceColumnCombos.js';

const ReduceButton = ({
	badges,
	badgeChanger,
	historyChanger,
	history,
	direction,
}) => {
	const reduceButtonClickHandler = () => {
		const newHistory = history.slice(
			0,
			history.findIndex((oldBadges) => oldBadges === badges) + 1
		);
		let newBadges;
		if (direction === 'column') {
			newBadges = reduceColumnCombos(badges);
		} else if (direction === 'row') {
			// Transpose the matrix
			newBadges = transpose(badges);
			// use the column reducer to reduce combos
			newBadges = reduceColumnCombos(newBadges);
			// Transpose it back to normal
			newBadges = transpose(newBadges);
		}

		newBadges = cleanupArray(newBadges);
		if (JSON.stringify(newBadges) !== JSON.stringify(badges)) {
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
			color='primary'
			onClick={reduceButtonClickHandler}
			style={{ margin: '0.3rem' }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-evenly',
				}}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: direction,
						// alignContent: 'center',
						justifyContent: 'space-evenly',
					}}>
					<TokenIcon
						style={{ width: '2rem', height: '3rem', color: 'white' }}
					/>
					<TokenIcon
						style={{ width: '2rem', height: '3rem', color: 'white' }}
					/>
					<TokenIcon
						style={{ width: '2rem', height: '3rem', color: 'white' }}
					/>
				</Box>
				<ArrowForwardIcon
					style={{ width: '2rem', height: '3rem', color: 'white' }}
				/>
				{/* <DeleteIcon style={{ width: '2rem', height: '2rem', color: 'white' }} /> */}
				<TokenIcon style={{ width: '2rem', height: '3rem', color: 'white' }} />
			</Box>
		</Button>
	);
};

export default ReduceButton;
