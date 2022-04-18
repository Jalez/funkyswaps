/** @format */

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Instructions from './Instructions.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Icon from './Icon.jsx';

const tips = {
	1: [
		{
			label: 'Introductions',
			description: <Instructions />,
		},
		{
			label: 'Swapping your first badge',
			description: (
				<>
					<Typography align='justify'>
						To swap your first badge, click on one of the Swapping controls. For
						instance, the following button swaps the "lips" badge to "fries":
					</Typography>
					<Button
						disabled
						variant='contained'
						style={{ margin: '0.1rem' }}
						color='primary'>
						<Icon iconName={'lips'} size={2} opacity={1} />
						<ArrowForwardIcon
							style={{ width: '2rem', height: '2rem', color: 'white' }}
						/>
						<Icon iconName={'fries'} size={2} opacity={1} />
					</Button>
					<Typography align='justify'>
						Don't believe me? Click the one inside the controls and find out!
					</Typography>
				</>
			),
		},
		{
			label: 'Moving to the next level',
			description: `Once both boards are identical and you pass the level, you can move onto the next level by clicking on the arrow controls <>`,
		},
	],
	2: [
		{
			label: 'Level 2',
			description: `Once both boards are identical and you pass the level, you can move onto the next level by clicking on the arrow controls <>`,
		},
	],
	3: [],
	4: [],
	5: [],
	6: [],
	7: [],
	8: [],
	9: [],
	10: [],
	11: [],
	12: [],
	13: [],
	14: [],
	15: [],
};

const TipStepper = ({ level }) => {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Stepper activeStep={activeStep} orientation='vertical'>
				{tips[level].map((step, index) => (
					<Step key={step.label}>
						<StepLabel
							optional={
								index === 2 ? (
									<Typography variant='caption'>Last step</Typography>
								) : null
							}>
							{step.label}
						</StepLabel>
						<StepContent>
							{step.description}
							<Box sx={{ mb: 2 }}>
								<div>
									<Button
										variant='contained'
										onClick={handleNext}
										sx={{ mt: 1, mr: 1 }}>
										{index === tips[level].length - 1 ? 'Finish' : 'Continue'}
									</Button>
									<Button
										disabled={index === 0}
										onClick={handleBack}
										sx={{ mt: 1, mr: 1 }}>
										Back
									</Button>
								</div>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === tips[level].length && (
				<Paper square elevation={0} sx={{ p: 3, bgcolor: 'white' }}>
					<Typography>
						That's it for all the tips this round. Let's get swapping!
					</Typography>
					<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
						Reset
					</Button>
				</Paper>
			)}
		</Box>
	);
};

export default TipStepper;
