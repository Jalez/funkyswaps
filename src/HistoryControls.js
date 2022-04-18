/** @format */

import { Button, ButtonGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
const HistoryControls = ({ history, historyChanger, badgeChanger, badges }) => {
	const [currentIndex, setCurrentIndex] = useState(history.length - 1);
	useEffect(() => {
		setCurrentIndex(history.findIndex((oldbadges) => oldbadges === badges));
	}, [history, badges]);

	const redoButtonClickHandler = () => {
		const newIndex = currentIndex + 1;
		badgeChanger(history[newIndex]);
	};
	const undoButtonClickHandler = () => {
		const newIndex = currentIndex - 1;
		badgeChanger(history[newIndex]);
	};

	const resetButtonClickHandler = () => {
		historyChanger([history[0]]);
		badgeChanger(history[0]);
	};

	return (
		<>
			<div style={{ fontSize: '2rem', color: 'white' }}>
				Number of swaps: {currentIndex}
			</div>
			<ButtonGroup
				variant='contained'
				aria-label='history button group'
				color='primary'
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignContent: 'center',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
					borderRadius: '0',
					bgcolor: '#35393C',
				}}>
				<Button
					sx={{ flex: '1 1 auto' }}
					// color='secondary'
					onClick={undoButtonClickHandler}
					disabled={currentIndex <= 0}>
					<UndoIcon style={{ width: '2rem', height: '2rem' }} />
				</Button>
				<Button
					onClick={resetButtonClickHandler}
					sx={{ flex: '1 1 auto' }}
					disabled={currentIndex === 0}
					// color='secondary'
				>
					Reset
				</Button>

				<Button
					sx={{ flex: '1 1 auto' }}
					onClick={redoButtonClickHandler}
					disabled={currentIndex === history.length - 1}>
					<RedoIcon style={{ width: '2rem', height: '2rem' }} />
				</Button>
			</ButtonGroup>
		</>
	);
};

export default HistoryControls;
