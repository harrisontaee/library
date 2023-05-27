import {Stack} from "../../../structures";
import {compare as defaultCompare} from "../../../utilities";

export class MinStack extends Stack {
	constructor(compare = defaultCompare) {
		super(compare);
	};
};