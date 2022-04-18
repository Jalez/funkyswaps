/** @format */

import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Board from './Board.js';
import MainSection from './MainSection.js';

const GameBoard = ({ playerBadges, targetBadges, level }) => {
	const [tallestColumn, setTallestColumn] = useState([0]);

	const tallestColumnHandler = (newTallestColumn) => {
		setTallestColumn(newTallestColumn);
	};

	useEffect(() => {
		setTallestColumn([0]);
	}, [level]);

	return (
		<Grid container>
			<Grid item md={6} xs={12}>
				<Board
					title={'Badges to swap'}
					pieces={playerBadges}
					tallestColumn={tallestColumn}
					handleTallestColumn={tallestColumnHandler}
				/>
			</Grid>
			<Grid item md={6} xs={12}>
				<Board
					title={'Badges to collect'}
					pieces={targetBadges}
					tallestColumn={tallestColumn}
					handleTallestColumn={tallestColumnHandler}
				/>
			</Grid>
		</Grid>
	);
};

export default GameBoard;
