
import { Point } from "../geometry/Point.mjs";
import { Command } from "../Command.mjs";

class LineTo extends Command
	{
	/**
	 * @param {Point} to
	 */
	constructor(to)
		{
		super("L");

		this.to = to;
		}

	/**
	 * @returns {String}
	 */
	toString()
		{
		return `${this.name}${this.to.x} ${this.to.y}`;
		}
	}

const _LineTo = LineTo;

export { _LineTo as LineTo };
