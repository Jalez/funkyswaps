/** @format */

export const cleanupArray = (badges) => {
	// Remove unnecessary arrays (IE the ones with only one badge)
	return badges.map((item, i) => {
		if (Array.isArray(item)) {
			if (item.length === 1) return item[0];
		}
		return item;
	});
};
