import {compare as defaultCompare} from "../../utilities";

export class Stack {
	stack: [any, [number, number]][] = [];
	length: number = 0;
	compare: (a: any, b: any) => number;


	constructor(compare = defaultCompare) {
		this.stack = [];
		this.compare = compare;
	};


	push = (item: any) => {
		const index = this.length;
		const indices = this.getBoundsIndices();
		this.length++;
		
		if (!!indices) {
			const min = this.get(indices[0]);
			if (this.compare(item, min) < 0) {
				return this.stack.push([item, [index, indices[1]]]);
			};

			const max = this.get(indices[1]);
			if (this.compare(item, max) > 0) {
				return this.stack.push([item, [indices[0], index]]);
			};

			return this.stack.push([item, indices]);
		} else this.stack.push([item, [index, index]]);
	};


	pop = () => {
		this.length--;
		return this.stack.pop();
	};


	top = () => {
		return this.get(this.length - 1);
	};


	get = (index: number) => {
		if (index > this.length - 1) return;
		return this.stack[index][0];
	};


	getMin = () => {
		const bounds = this.getBoundsIndices();
		if (!bounds) return;
		return this.get(bounds[0]);
	};


	getMax = () => {
		const bounds = this.getBoundsIndices();
		if (!bounds) return;
		return this.get(bounds[1]);
	};


	getBoundsIndices = () => {
		if (!this.length) return;
		return this.stack[this.length - 1][1];
	};
};