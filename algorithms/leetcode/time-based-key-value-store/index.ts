export class TimeMap {
	map: {[key: string]: [number, string][]}


	constructor () {
		this.map = {};
	};


	set = (key: string, value: string, time: number) => {
		if (!this.map[key]) this.map[key] = [];
		this.map[key].push([time, value]);
	};


	get = (key: string, time: number) => {
		let values = this.map[key], l = 0, r = values.length - 1, res = "";

		while (l <= r) {
			const m = Math.floor((l + r) / 2);

			if (values[m][0] === time) return values[m][1];
			else if (values[m][0] < time) {
				res = values[m][1];
				l = m + 1;
			} else r = m - 1;
		};
		
		return res;
	};
};