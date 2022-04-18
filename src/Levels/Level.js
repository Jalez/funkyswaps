/** @format */

import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
// Gameboard is where the badge-boards are
import GameBoard from '../GameBoard.js';
// Game board in Array form
import GameArrays from '../GameArrays.js';
// All controls reside here
import ControlBoard from '../ControlBoard.js';
// Details specific controls
import Controls from '../Controls.js';
// Controls for history
import HistoryControls from '../HistoryControls.js';
// Controls for Mapping
import MapButton from '../MapButton.js';
// Controls for filtering
import FilterButton from '../FilterButton.js';

// importing level details
import { levels } from './Levels.js';
import ReduceButton from '../ReduceButton.js';
import FullWidthTabs from '../FullWidthTabs.js';
import CodeEditor from '../CodeEditor.js';

const Level = ({ completionHandler, level }) => {
	const [badges, setBadges] = useState(levels[level].myStartingBadges);
	const [badgesToCollect, setBadgesToCollect] = useState(
		levels[level].badgesToCollect
	);
	const [mapControls, setMapControls] = useState(levels[level].mapControls);
	const [filterControls, setFilterControls] = useState(
		levels[level].filterControls
	);
	const [history, setHistory] = useState([badges]);
	const [controlTabs, setControlTabs] = useState(levels[level].controlTabs);
	const [reduceControls, setReduceControls] = useState(
		levels[level].reduceControls
	);
	useEffect(() => {
		setControlTabs(levels[level].controlTabs);
		setBadges(levels[level].myStartingBadges);
		setBadgesToCollect(levels[level].badgesToCollect);
		setHistory([levels[level].myStartingBadges]);
		setMapControls(levels[level].mapControls);
		setFilterControls(levels[level].filterControls);
		setReduceControls(levels[level].reduceControls);
	}, [level]);

	useEffect(() => {
		let equal = true;
		// Every time badges changes, we need to compare it to what was supposed to be collected
		if (badges.length !== badgesToCollect.length) {
			equal = false;
		} else {
			for (let index = 0; index < badges.length; index++) {
				if (!equal) break;
				if (Array.isArray(badges[index])) {
					if (!Array.isArray(badgesToCollect[index])) {
						equal = false;
						break;
					} else {
						if (badges[index].length !== badgesToCollect[index].length) {
							equal = false;
							break;
						} else {
							for (let ii = 0; ii < badges[index].length; ii++) {
								if (badges[index][ii] !== badgesToCollect[index][ii]) {
									equal = false;
									break;
								}
							}
						}
					}
				} else if (badges[index] !== badgesToCollect[index]) {
					equal = false;
					break;
				}
			}
		}
		if (equal) {
			completionHandler();
		}
	}, [badges, badgesToCollect]);

	const badgeChangeHandler = (newBadges) => {
		setBadges(newBadges);
	};

	const historyChangeHandler = (newHistory) => {
		setHistory(newHistory);
	};

	const controlSettings = {
		badges: badges,
		badgeChanger: badgeChangeHandler,
		historyChanger: historyChangeHandler,
		history: history,
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
				// justifyContent: 'space-between',
				// height: 'ma',
				padding: '2px',
				minHeight: '700px',
				borderRadius: 'inherit',
				backgroundColor: '#5b5e61',
			}}>
			<div
				style={{
					flex: '1 1 400px',
				}}>
				<FullWidthTabs
					tabLabels={[
						{ label: 'In badges', id: 0 },
						{ label: 'In array', id: 1 },
					]}
					title=''
					level={level}>
					<GameBoard
						playerBadges={badges}
						targetBadges={badgesToCollect}
						level={level}
					/>

					<GameArrays playerBadges={badges} targetBadges={badgesToCollect} />
				</FullWidthTabs>
			</div>

			<HistoryControls
				history={history}
				historyChanger={historyChangeHandler}
				badgeChanger={badgeChangeHandler}
				badges={badges}
			/>

			<div
				style={{
					flex: '1 1 300px',
				}}>
				<FullWidthTabs tabLabels={controlTabs} title='' level={level}>
					<CodeEditor {...controlSettings} />

					{mapControls.length !== 0 ? (
						<Controls title={'Mapping'}>
							{mapControls.map(({ from, to }, i) => (
								<MapButton key={i} from={from} to={to} {...controlSettings} />
							))}
						</Controls>
					) : (
						<p>No map buttons in this level, select another tab!</p>
					)}
					{filterControls.length !== 0 ? (
						<Controls title={'Filtering'}>
							{filterControls.map(({ target }, i) => (
								<FilterButton key={i} target={target} {...controlSettings} />
							))}
						</Controls>
					) : (
						<p>No filter buttons in this level, select another tab!</p>
					)}
					{reduceControls.length !== 0 ? (
						<Controls title={'Reducing'}>
							{reduceControls.map((direction, i) => (
								<ReduceButton
									key={i}
									direction={direction}
									{...controlSettings}
								/>
							))}
						</Controls>
					) : (
						<div>No reduce buttons in this level, select another tab!</div>
					)}
				</FullWidthTabs>
			</div>
		</Box>
	);
};

export default Level;
