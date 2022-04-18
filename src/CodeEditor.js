/** @format */

import { oneDark } from '@codemirror/theme-one-dark';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';

export default function CodeEditor({
	badges,
	badgeChanger,
	historyChanger,
	history,
}) {
	const [code, setCode] = useState(
		'currentBadges = ' +
			JSON.stringify(badges) +
			'\n' +
			'newBadges = //Your function here'
	);
	const buttonClickHandler = () => {
		let newBadges;
		try {
			if (code.includes('document'))
				alert(
					'You do not need to access document in this assignment. Aborting code execution.'
				);
			else if (code.includes('fetch'))
				alert(
					'Why are you trying to fetch something..? Aborting code execution.'
				);
			else if (
				code.includes('for') ||
				code.includes('while') ||
				code.includes('forEach')
			)
				alert('Normal loops are not allowed.');
			else if (
				!code.includes('map') &&
				!code.includes('filter') &&
				!code.includes('reduce')
			)
				alert('Your code MUST use map, filter or reduce.');
			// eslint-disable-next-line no-eval
			else eval(code);
			if (newBadges) {
				if (JSON.stringify(newBadges) !== JSON.stringify(badges)) {
					// Add new badges to history
					const newHistory = history.slice(
						0,
						history.findIndex((oldBadges) => oldBadges === badges) + 1
					);
					newHistory.push(newBadges);
					historyChanger([...newHistory]);
					// Change current badges
					badgeChanger(newBadges);
					let [firstLine, ...rest] = code.split(/\r?\n/);
					firstLine = 'currentBadges = ' + JSON.stringify(newBadges);
					setCode(firstLine + '\n' + rest);
				}
			}
		} catch (error) {
			throw new Error(error);
			// console.log(error);
		}
	};
	return (
		<>
			<CodeMirror
				style={{
					textAlign: 'left',
					cursor: 'pointer',
				}}
				theme={oneDark}
				value={code}
				placeholder='Write your javascript here'
				height='200px'
				extensions={[javascript({ jsx: true })]}
				onChange={(value, viewUpdate) => {
					setCode(value);
				}}
			/>
			<ButtonGroup
				variant='contained'
				aria-label='Code editor button group'
				// color='primary'
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignContent: 'center',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
					borderRadius: '0',
					bgcolor: '#35393C',
				}}>
				<Button sx={{ flex: '1 1 auto' }} onClick={buttonClickHandler}>
					Execute
				</Button>
			</ButtonGroup>
		</>
	);
}
