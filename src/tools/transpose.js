/** @format */

export const transpose = (matrix) => {
	return matrix.reduce((prev, next) => {
		if (Array.isArray(next)) {
			//const reversed = next.reverse()
			return next.reduce((p, n, i) => {
				p[i] = (prev[i] || []).concat(next[i]);
				return p;
			}, prev);
		}
		prev[0] = prev[0]?.concat(next) || [next];
		return prev;
	}, []);
};
