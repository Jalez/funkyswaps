/** @format */

import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Column from './Column.js';
import Heading from './Heading.js';
import Icon from './Icon.jsx';

const Board = ({ title, pieces, tallestColumn, handleTallestColumn }) => {
	useEffect(() => {
		const newCandidateTallest = pieces.reduce((previousValue, currentValue) => {
			if (Array.isArray(currentValue)) {
				return currentValue.length > previousValue.length
					? currentValue
					: previousValue;
			}
			return previousValue;
		}, tallestColumn);
		if (newCandidateTallest !== tallestColumn) {
			handleTallestColumn(newCandidateTallest);
		}
	}, [tallestColumn, pieces]);

	return (
		<Box
			sx={{
				flex: '1 0 auto',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
				margin: 1,
				height: '100%',
				width: '100%',
			}}>
			<Heading type={2}>{title}</Heading>
			<Box
				sx={{
					flex: '1 1 250px',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-end',
					height: '100%',
				}}>
				<Column number={''}>
					{tallestColumn.map((icon, i) => (
						<div
							key={i}
							style={{
								width: `${3}rem`,
								height: `${3}rem`,
								fontSize: '2rem',
								color: 'white',
								borderRight: '5px solid white',
							}}>
							{i}
						</div>
					))}
				</Column>
				{pieces.map((piece_0, i) => {
					if (Array.isArray(piece_0)) {
						return (
							<Column key={i} number={i}>
								{piece_0.map((piece_1, ii) => (
									<Icon key={ii} iconName={piece_1} size={3} />
								))}
							</Column>
						);
					}
					return (
						<Column number={i} key={i}>
							<Icon key={i} iconName={piece_0} size={3} />
						</Column>
					);
				})}
			</Box>
		</Box>
	);
};

export default Board;
