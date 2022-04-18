/** @format */

import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material';

const THEME = createTheme({
	typography: {
		fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
		// fontSize: 10,
		textAlign: 'justify',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
	palette: {
		action: {
			disabledBackground: '#35393C',
			disabled: '#5b5e61',
		},
		primary: {
			main: '#35393C',
		},
		secondary: {
			main: '#0066ff',
			light: '#0066ff',
			// dark: will be calculated from palette.secondary.main,
			contrastText: '#ffcc00',
		},
		background: {
			paper: '#5b5e61',
			headers: '#0066ff',
		},
	},
});

const root = createRoot(document.getElementById('root'));

root.render(
	<ThemeProvider theme={THEME}>
		<App />
	</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
