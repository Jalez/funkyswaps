/** @format */

import { Grid, Paper } from '@mui/material';
import './App.css';
import LevelControls from './LevelControls.js';
import { useEffect, useState } from 'react';
import FinishButton from './FinishButton.js';
import { Box } from '@mui/system';
import CompletedMark from './CompletedMark.js';
import Congratulations from './Congratulations.js';
import TipStepper from './TipStepper.js';
import Level from './Levels/Level.js';

function App() {
	const [level, setLevel] = useState(1);
	const [completedLevels, setCompletedLevels] = useState({
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false,
		9: false,
		10: false,
	});

	useEffect(() => {
		const handler = (event) => {
			try {
				const data = JSON.parse(event.data);
				console.log('Incoming data to the game:', data);
			} catch (error) {}
		};

		window.addEventListener('message', handler);

		// clean up
		return () => window.removeEventListener('message', handler);
	}, []); // empty array => run only once

	useEffect(() => {
		const message = JSON.stringify({
			message: 'Hello from Funky Swaps: Update to list of completed levels',
			type: 'updating',
			data: completedLevels,
			date: Date.now(),
		});
		window.parent.postMessage(message, '*');
	}, [completedLevels]); // empty array => run only once

	const handleLevel = (newCurrentLevel) => {
		setLevel(newCurrentLevel);
	};
	const handleLevelCompletion = () => {
		completedLevels[level] = true;
		setCompletedLevels({ ...completedLevels });
	};

	return (
		<div className='App' style={{ margin: 10 }}>
			<Paper
				style={{
					padding: 10,
					backgroundColor: '#e7ecef',
					minHeight: '700px',
					height: 'fit-content',
				}}
				elevation={4}>
				<Grid container style={{ height: 'inherit', minHeight: '700px' }}>
					<Grid item sm={8} xs={12}>
						<Paper
							style={{
								backgroundColor: 'black',
								height: 'fit-content',
								minHeight: '700px',
							}}>
							{level && (
								<Level
									level={level}
									completionHandler={handleLevelCompletion}
								/>
							)}
						</Paper>
					</Grid>
					<Grid item sm={4} xs={12}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								height: '100%',
								margin: '0.3rem',
							}}>
							<div>
								<LevelControls
									currentlevel={level}
									levelHandler={handleLevel}
									maxLevels={10}
								/>
								<CompletedMark isCompleted={completedLevels[level]} />
							</div>

							{completedLevels[level] ? (
								<>
									<Congratulations level={level} levelHandler={handleLevel} />
								</>
							) : (
								<TipStepper level={level} />
							)}
							<FinishButton completedLevels={completedLevels} />
						</Box>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}

export default App;
