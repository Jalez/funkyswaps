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
import Icon from './Icon.jsx';
import { ButtonGroup } from '@mui/material';
// Icons used for the introductions
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

const tips = {
	1: [
		{
			label: 'Introductions',
			description: <Instructions />,
		},
		{
			label: 'Swapping your first badge with map',
			description: (
				<>
					<Typography align='justify'>
						To swap your first badge, you'll be using the provided controls. In
						level 1, you'll use mapping to swap one badge with another. For
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
						Don't believe me? Click on the button inside the game controls and
						find out!
					</Typography>
				</>
			),
		},
		{
			label: 'What is the map() method?',
			description: (
				<>
					<Typography align='justify'>
						Good question! The map() method creates a new array populated with
						the results of calling a provided function on{' '}
						<strong>every element</strong> in the calling array.
					</Typography>
					<Typography align='justify'>
						In Funky swamps, the provided function to the map() method replaces
						a specified element in the old array with another icon, leaving the
						other icons be as they were when it{' '}
						<strong>returns a new array.</strong>
					</Typography>
					<Typography align='justify'>
						As is expected in functional programming, the map-method does not
						mutate the state of an array. Rather, it creates a new array that is
						returned as the result.
					</Typography>
				</>
			),
		},
		{
			label: 'Completing the level',
			description: (
				<>
					<Typography align='justify'>
						Your job now is to match the two boards displayed by using the
						provided map-controls.
					</Typography>
					<Typography align='justify'>
						Once both boards are identical you'll pass the level. You can then
						move onto the next level by using the level controls, or by clicking
						the "Move to level 2" button that appears once you've completed this
						level. The{' '}
						<ThumbUpIcon
							style={{
								color: 'green',
								fontSize: '1rem',
							}}
						/>{' '}
						marks the completion of the level.
					</Typography>
				</>
			),
		},
	],
	2: [
		{
			label: 'Level 2 - Map buttons, part 2',
			description: (
				<>
					<Typography align='justify'>
						In this level, you'll continue to learn how map can be used. We'll
						also introduce to you some of the helpful mechanics that we designed
						to help you on your way.
					</Typography>
					<Typography align='justify'>
						This level is a bit harder than the first one, but I'm sure you'll
						figure it out. Good luck!
					</Typography>
				</>
			),
		},
		{
			label: 'Made a mistake? The history controls',
			description: (
				<>
					<Typography align='justify'>
						Whenever you make a mistake, it'd helpful if you were able to go
						back in time, right? Well in this game, you can. The history
						controls are at the center of the gameboard, and they look like
						this:
					</Typography>
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
						<Button sx={{ flex: '1 1 auto' }} disabled>
							<UndoIcon style={{ width: '2rem', height: '2rem' }} />
						</Button>
						<Button
							sx={{ flex: '1 1 auto' }}
							disabled
							// color='secondary'
						>
							Reset
						</Button>

						<Button sx={{ flex: '1 1 auto' }} disabled>
							<RedoIcon style={{ width: '2rem', height: '2rem' }} />
						</Button>
					</ButtonGroup>
					<Typography align='justify'>
						Whenever you swap something on the board, the history automatically
						updates itself. The buttons light up whenever you can use them. Go
						ahead, make a mistake and see what happens when you click on the
						buttons!
					</Typography>
				</>
			),
		},
		{
			label: 'Tired of badges? Try the array',
			description: (
				<Typography align='justify'>
					Sometimes it's easier to understand what's going on when you get a
					glimpse under the hood. On the gameboard, you have both "In badges"
					and "In Array" tabs available. If you want, you can use the "In
					Array"-tab to see what form the badges take behind the scenes. You'll
					need this knowledge later on when you'll start making your own
					functions with the provided text-editor.
				</Typography>
			),
		},
	],
	3: [
		{
			label: 'Level 3 - Filter button',
			description: (
				<>
					<Typography align='justify'>
						In this level, you'll be introduced to a new button: filter. You'll
						find it inside the "filtering"-tab (next to the mapping tab). Let's
						get filtering!
					</Typography>
				</>
			),
		},
		{
			label: 'What is the filter button?',
			description: (
				<>
					<Typography align='justify'>
						The filter button is a button that uses the built-in filter()-method
						to - you guessed it- filter the given array. Try clicking on the
						button inside the "filtering"-tab to see what happens!
					</Typography>
				</>
			),
		},
		{
			label: 'What is the filter() method?',
			description: (
				<>
					<Typography align='justify'>
						The filter() method <strong>creates a new array</strong> with all
						elements that pass the test implemented by the provided function.
					</Typography>
					<Typography align='justify'>
						In Funky swaps, that function let's only the elements/badges pass
						that do not match the element in question. (In this instance:
						"rainbow")
					</Typography>
				</>
			),
		},
	],
	4: [
		{
			label: 'Level 4 - Reduce Button',
			description: (
				<Typography align='justify'>
					In this level, you'll be introduced to a new button/method: reduce.
					You'll find it inside the "reducing" tab (next to the "filtering"
					tab). Let's get reducing!
				</Typography>
			),
		},
		{
			label: 'What is the reduce button?',
			description: (
				<Typography align='justify'>
					Much like the Map and Filter buttons, the reduce button uses the
					built-in reduce()-method behind the scenes. In Funky swaps, we are
					using reduce()-method to reduce a column of 3 identical badges to a
					single badge, that is placed where the first instance used to be. Go
					ahead, try it now.
				</Typography>
			),
		},
		{
			label: 'Finishing the level',
			description: (
				<>
					<Typography align='justify'>
						You still have work to do here. Remember to use the other buttons
						that are provided to you for the required mapping and filtering
						functions to pass the level.
					</Typography>
					,
					<Typography align='justify'>
						In the next level, we'll continue with the reduce()-method.
					</Typography>
					,
				</>
			),
		},
	],
	5: [
		{
			label: 'Level 5 - Reduce, part 2',
			description: (
				<Typography align='justify'>
					This time we'll introduce another reduce-button that lets you reduce
					rows of 3 identical badges to one. The idea is still the same as
					before, go ahead and give it a shot.
				</Typography>
			),
		},
		{
			label: 'Food for thought',
			description: (
				<Typography align='justify'>
					Doing this reduce-button with a single lambda function is quite hard
					actually. In this game, you won't have to code one yourself (unless
					you want to), but it'd still be good to atleast think about how you'd
					implement a function that reduced a row of n identical elements from
					several arrays.
				</Typography>
			),
		},
	],
	6: [
		{
			label: 'Level 6 - Map with the text editor',
			description: (
				<Typography align='justify'>
					Now we'll start doing this with the text editor. We'll start by using
					the map() method.
				</Typography>
			),
		},
		{
			label: 'Reading about the map() method',
			description: (
				<Typography align='justify'>
					Reading the article on map() method here:
					https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
				</Typography>
			),
		},
		{
			label: 'Getting started with the text editor',
			description: (
				<Typography align='justify'>
					Now that we have all read the article, we can get started making our
					function.
				</Typography>
			),
		},
	],
	7: [
		{
			label: 'Level 7 - Filter with the text editor',
			description: (
				<Typography align='justify'>
					Next we'll move on to the filter() method.
				</Typography>
			),
		},
	],
	8: [
		{
			label: 'Level 8 - Reduce with the text editor',
			description: (
				<Typography align='justify'>
					Now we can practice using the reduce method. Let's see how it works.
				</Typography>
			),
		},
	],
	9: [
		{
			label: 'Level 9 - Putting it all together',
			description: (
				<Typography align='justify'>
					Alright, training is done. Let's now use this level as an opportunity
					to use all the new methods we know to swap out all the badges that are
					wrong in this world with the badges that can only be right. Good luck
					swapventurer!
				</Typography>
			),
		},
	],
	10: [
		{
			label: 'Level 10 - Final level',
			description: (
				<Typography align='justify'>
					Alright, last one to go! Go ahead, give it your best. You should now
					know all you need to pass this level too. You got this- We believe in
					you!
				</Typography>
			),
		},
	],
};

const TipStepper = ({ level }) => {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	React.useEffect(() => {
		setActiveStep(0);
	}, [level]);

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: '100%', height: 'fit content' }}>
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
