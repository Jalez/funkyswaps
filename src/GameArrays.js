/** @format */

import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MainSection from './MainSection.js';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GameArrays = ({ playerBadges, targetBadges }) => {
	return (
		// <MainSection title='Badges in Array Form'>
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-evenly',
				flexWrap: 'wrap',
			}}>
			<Accordion
				sx={{
					width: '100%',
					borderBottom: 0,
					margin: 0,
					backgroundColor: '#35393C',
					color: 'white',
				}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography>Badges to swap</Typography>
				</AccordionSummary>
				<AccordionDetails style={{ backgroundColor: 'white', color: 'black' }}>
					<Typography>{JSON.stringify(playerBadges)}</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				style={{
					width: '100%',
					borderBottom: 0,
					backgroundColor: '#35393C',
					color: 'white',
					margin: 0,
				}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography>Badges to collect </Typography>
				</AccordionSummary>
				<AccordionDetails style={{ backgroundColor: 'white', color: 'black' }}>
					<Typography>{JSON.stringify(targetBadges)}</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
		// </MainSection>
	);
};

export default GameArrays;
