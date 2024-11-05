
import { Point } from "../geometry/Point.mjs";

class Command
	{
	/**
	 * @param {String} name
	 */
	constructor(name)
		{
		this.name = name;
		}

	/**
	 * @param {Point} point
	 * 
	 * @returns {String}
	 */
	pointToString(point)
		{
		return `${point.x},${point.y}`;
		}
	}

const _Command = Command;
