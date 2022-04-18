/** @format */

export const levels = {
	1: {
		myStartingBadges: ['ghost', 'lips', 'fries', 'banana'],
		badgesToCollect: ['ghost', 'banana', 'banana', 'banana'],
		mapControls: [
			{ from: 'lips', to: 'fries' },
			{ from: 'fries', to: 'banana' },
		],
		filterControls: [],
		reduceControls: [],
		controlTabs: [{ label: 'Mapping', id: 1 }],
	},
	2: {
		myStartingBadges: ['alien', ['rainbow', 'rainbow'], 'donut', 'cat'],
		badgesToCollect: ['ghost', ['banana', 'banana'], 'donut', 'fries'],
		mapControls: [
			{ from: 'cat', to: 'fries' },
			{ from: 'fries', to: 'banana' },
			{ from: 'alien', to: 'ghost' },
			{ from: 'rainbow', to: 'fries' },
			{ from: 'donut', to: 'fries' },
		],
		filterControls: [],
		reduceControls: [],
		controlTabs: [{ label: 'Mapping', id: 1 }],
	},
	3: {
		myStartingBadges: [['alien', 'rainbow'], 'donut', 'cat', 'rainbow'],
		badgesToCollect: ['ghost', ['banana', 'banana'], 'fries'],
		mapControls: [
			{ from: 'cat', to: 'fries' },
			{ from: 'fries', to: 'banana' },
			{ from: 'alien', to: 'ghost' },
			{ from: 'rainbow', to: 'fries' },
			{ from: 'donut', to: ['banana', 'banana'] },
		],
		filterControls: [{ target: 'rainbow' }],
		reduceControls: [],
		controlTabs: [
			{ label: 'Mapping', id: 1 },
			{ label: 'Filtering', id: 2 },
		],
	},
	4: {
		myStartingBadges: [
			['alien', 'alien', 'alien', 'rainbow'],
			'donut',
			'cat',
			'rainbow',
		],
		badgesToCollect: ['alien', ['banana', 'banana'], 'fries'],
		mapControls: [
			{ from: 'cat', to: 'fries' },
			{ from: 'fries', to: 'banana' },
			{ from: 'alien', to: 'ghost' },
			{ from: 'rainbow', to: 'fries' },
			{ from: 'donut', to: ['banana', 'banana'] },
		],
		filterControls: [{ target: 'rainbow' }],
		reduceControls: ['column'],
		controlTabs: [
			{ label: 'Mapping', id: 1 },
			{ label: 'Filtering', id: 2 },
			{ label: 'Reducing', id: 3 },
		],
	},
	5: {
		myStartingBadges: [
			['alien', 'headphones', 'alien', 'rainbow'],
			['donut', 'headphones'],
			['cat', 'headphones'],
			'rainbow',
		],
		badgesToCollect: ['alien', ['banana', 'banana'], 'fries'],
		mapControls: [
			{ from: 'cat', to: 'fries' },
			{ from: 'fries', to: 'banana' },
			{ from: 'alien', to: 'ghost' },
			{ from: 'ghost', to: 'alien' },
			{ from: 'rainbow', to: 'fries' },
			{ from: 'donut', to: ['banana', 'banana'] },
			{ from: 'headphones', to: 'ghost' },
		],
		filterControls: [{ target: 'rainbow' }],
		reduceControls: ['row', 'column'],
		controlTabs: [
			{ label: 'Mapping', id: 1 },
			{ label: 'Filtering', id: 2 },
			{ label: 'Reducing', id: 3 },
		],
	},
	6: {
		myStartingBadges: ['ghost', 'lips', 'fries', 'banana'],
		badgesToCollect: ['ghost', 'banana', 'banana', 'banana'],
		mapControls: [],
		filterControls: [],
		reduceControls: [],
		controlTabs: [{ label: 'Text Editor', id: 0 }],
	},
};
