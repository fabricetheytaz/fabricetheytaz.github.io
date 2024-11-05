
import { Point } from "../geometry/Point.mjs";
import { Command } from "../Command.mjs";

class MoveTo extends Command
	{
	/**
	 * @param {Point} point
	 */
	constructor(point)
		{
		super("M");

		this.point = point;
		}

	/**
	 * @returns {String}
	 */
	toString()
		{
		return `${this.name}${this.point.x} ${this.point.y}`;
		}
	}

const _MoveTo = MoveTo;

export { _MoveTo as MoveTo };
