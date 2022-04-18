/** @format */

export const levels = {
	// Learning how to play the game using map
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
	// Learning how to play the game when the level is a bit harder + you can map one icon to several others
	2: {
		myStartingBadges: ['alien', ['rainbow', 'rainbow'], 'umbrella', 'cat'],
		badgesToCollect: [
			'ghost',
			['banana', 'banana'],
			'donut',
			['fries', 'umbrella'],
		],
		mapControls: [
			{ from: 'cat', to: ['fries', 'donut'] },
			{ from: 'fries', to: 'donut' },
			{ from: 'alien', to: 'donut' },
			{ from: 'alien', to: 'ghost' },
			{ from: 'umbrella', to: 'donut' },
			{ from: 'umbrella', to: 'alien' },
			{ from: 'donut', to: 'umbrella' },
			{ from: 'donut', to: 'fries' },
			{ from: 'rainbow', to: 'banana' },
		],
		filterControls: [],
		reduceControls: [],
		controlTabs: [{ label: 'Mapping', id: 1 }],
	},
	// Learning about the filter button
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
	// Learning about the reduce button
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
	// Reduce button part 2
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
	// Learning how to make maps using the Text editor.
	6: {
		myStartingBadges: ['donut', 'lips', 'skull', 'pizza'],
		badgesToCollect: ['fries', 'ghost', 'cat', 'banana'],
		mapControls: [],
		filterControls: [],
		reduceControls: [],
		controlTabs: [{ label: 'Text Editor', id: 0 }],
		textEditorAllows: ['map'],
	},
	// Learning how to make filter
	7: {
		myStartingBadges: [
			['fries', 'umbrella'],
			['ghost', 'donut'],
			['fries', 'cat'],
			['dog', 'banana'],
			'melon',
		],
		badgesToCollect: ['fries', 'ghost', 'cat', 'banana'],
		mapControls: [],
		filterControls: [],
		reduceControls: [],
		controlTabs: [{ label: 'Text Editor', id: 0 }],
		textEditorAllows: ['filter'],
	},
	// Learning reduce
	8: {
		myStartingBadges: [
			['fries', 'fries', 'fries'],
			['ghost', 'ghost', 'ghost'],
			['cat', 'cat'],
			['banana', 'banana', 'banana', 'banana', 'banana'],
			'melon',
		],
		badgesToCollect: ['fries', 'ghost', ['cat', 'cat'], 'banana'],
		mapControls: [],
		filterControls: [],
		reduceControls: [],
		controlTabs: [{ label: 'Text Editor', id: 0 }],
		textEditorAllows: ['reduce'],
	},
	// Putting it all together
	9: {
		myStartingBadges: [
			['melon', 'melon', 'melon'],
			'ghost',
			['cat', 'dog', 'melon'],
			'melon',
			'banana',
		],
		badgesToCollect: [
			'melon',
			['headphones', 'headphones'],
			['dog', 'cat', 'melon'],
			'banana',
		],
		mapControls: [],
		filterControls: [],
		reduceControls: [],
		controlTabs: [{ label: 'Text Editor', id: 0 }],
		textEditorAllows: ['reduce', 'filter', 'map'],
	},
	// One more time!
	10: {
		myStartingBadges: ['cat', 'dog', 'fries', ['dog', 'cat'], 'lips', 'melon'],
		badgesToCollect: [
			'cat',
			'donut',
			['cat', 'cat'],
			'banana',
			['lips', 'melon'],
		],
		mapControls: [],
		filterControls: [],
		reduceControls: [],
		controlTabs: [{ label: 'Text Editor', id: 0 }],
		textEditorAllows: ['reduce', 'filter', 'map'],
	},
};
