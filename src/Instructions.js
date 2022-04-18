/** @format */

import { useTheme } from '@emotion/react';
import {
	Description,
	KeyboardArrowLeft,
	KeyboardArrowRight,
} from '@mui/icons-material';
import { Button, MobileStepper, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Heading from './Heading.js';
import Image from './Image.jsx';

const steps = [
	{
		label: 'Name of the game',
		description:
			'Welcome to Funky Swaps. This game aims to familiarize you to some of the main tools of functional  programming: maps, filters, and reducers.',
	},

	{
		label: 'How it works',
		description:
			'In the first stages, the operations are done through the use of buttons to familiarize you with the games logic. Later you will be creating the operations yourself. ',
	},
	{
		label: 'The Mission',
		description: `The goal is simple: swap the badges you have on the left to match the badge collection on the right. The order and location matters.`,
	},
	{
		label: "That's it! Let's get swapping",
		description: (
			<Box sx={{ display: 'flex', flexDirection: 'row' }}>
				<Typography variant='body1' style={{ lineHeight: '1.8' }}>
					Click on the{' '}
					<span
						style={{
							backgroundColor: '#274c77',
							color: 'white',
							width: '3rem',
							padding: '0.5rem',
							borderRadius: '4px',
							fontSize: '0.7rem',
							fontWeight: '500',
							boxShadow:
								'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
						}}>
						CONTINUE
					</span>{' '}
					button to continue to the next step!
				</Typography>
			</Box>
		),
	},
];

const Instructions = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = steps.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Paper
				square
				elevation={0}
				sx={{
					display: 'flex',
					alignItems: 'center',
					height: 50,
					pl: 2,
					bgcolor: 'background.default',
				}}>
				<Typography>
					<strong>{steps[activeStep].label}</strong>
				</Typography>
			</Paper>
			<Box sx={{ p: 1, height: '7.5rem', overflow: 'auto' }}>
				<Typography align='justify'>{steps[activeStep].description}</Typography>
			</Box>
			<MobileStepper
				variant='text'
				steps={maxSteps}
				position='static'
				activeStep={activeStep}
				nextButton={
					<Button
						size='small'
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}>
						Next
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button size='small' onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
			/>
		</Box>
	);
};

export default Instructions;
