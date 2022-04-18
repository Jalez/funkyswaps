/** @format */

export const reduceColumnCombos = (b) => {
	let combo = [];
	return b.reduce((prevVal1, curVal1, i) => {
		if (Array.isArray(curVal1)) {
			prevVal1.push(
				curVal1.reduce((prevVal2, curVal2, ii) => {
					if (combo.includes(curVal2)) {
						// Combo continues
						combo.push(curVal2);
						if (combo.length === 3) {
							// 3 max combo, pusshing curVal2 to array
							prevVal2.push(curVal2);
							// Emptying combo Array.
							combo = [];
						}
					} else {
						// Didnt include curVal2, combo broken
						// Push everything that's currently in combo-arary
						prevVal2.push(...combo);
						// Empty it
						combo = [];
						// Push the current value there
						combo.push(curVal2);
					}
					if (ii === curVal1.length - 1) {
						// Push everything in combo to prevVal2
						prevVal2.push(...combo);
						// Empty combo for future operations.
						combo = [];
					}
					return prevVal2;
				}, [])
			);
		} else prevVal1.push(curVal1);
		if (i === b.length - 1) {
			// Push everything in combo to prevVal2
			prevVal1.push(...combo);
			// Empty combo for future operations.
			combo = [];
		}
		return prevVal1;
	}, []);
};
