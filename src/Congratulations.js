/** @format */

import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const style = {
	bgcolor: 'white',
	p: 4,
};

const congratulations = {
	1: {
		heading: 'Congratulations, first level passed!',
		content: [
			'Easy points in the pocket! You can now move on to the next level.',
		],
	},
	2: {
		heading: 'Congratulations, level passed!',
		content: [
			"That was a bit trickier, wasn't it? You can now move on to the next level.",
		],
	},
	3: {
		heading: 'Congratulations, level passed!',
		content: [
			'Looks like you also understood what filtering does in this context, well done!  You can now move on to the next level.',
		],
	},
	4: {
		heading: 'Congratulations, level passed!',
		content: [
			"You are starting to get a hang of this. Keep up the good work!  We'll continue with reduce on the next level.",
		],
	},
	5: {
		heading: 'Congratulations, level passed!',
		content: [
			"You got it, well done! By now you should have a solid grasp of the game. In the next levels, we'll start implementing our own functions with a text editor to get the badges we need.",
		],
	},
	6: {
		heading: 'Congratulations, level passed!',
		content: [
			"Good job! Using the map() method wasn't that hard, was it? We'll do filter() in the next level.",
		],
	},
	7: {
		heading: 'Congratulations, level passed!',
		content: ['Filtering finished! Lets do reduce() next. '],
	},
	8: {
		heading: 'Congratulations, level passed!',
		content: [
			"Damn you are good. Map, Filter and Reduce, all done separately. Let's make it harder in the next one- granted, I'll let you use all of them in it. Two to go! ",
		],
	},
	9: {
		heading: 'Congratulations, level passed!',
		content: [
			'Damn, I honestly thought this would be much harder for you. Alright, last one- Take a swap, young swap-walker.',
		],
	},
	10: {
		heading: 'Congratulations, game over!',
		content: [
			"Huzzah, all done! You have completed the last level of the Funky Swaps tutorial on the fundamental methods of functional programming- map, filter and reduce. Well done, master swapper! Be sure to submit your answers for grading if you've finished all the levels. ",
		],
	},
};

const Congratulations = ({ level, levelHandler }) => {
	return (
		<Box sx={style}>
			<Typography
				id='transition-modal-title'
				variant='h3'
				component='h3'
				fontSize={20}>
				{congratulations[level].heading}
			</Typography>
			<Typography id='transition-modal-description' sx={{ mt: 2 }}>
				{congratulations[level].content}
			</Typography>
			{level !== 15 && (
				<Button onClick={(e) => levelHandler(level + 1)} variant='contained'>
					Move to Level {level + 1}
				</Button>
			)}
		</Box>
	);
};

export default Congratulations;
