
import { Point } from "../geometry/Point.mjs";
import { Command } from "../Command.mjs";
import { MoveTo } from "./MoveTo.mjs";

class Path
	{
	/**
	 * @param {Command[]} commands
	 */
	constructor(commands = [])
		{
		this.commands = commands;
		}

	/**
	 * @param {Point} point
	 */
	moveTo(point)
		{
		this.commands.push(new MoveTo(point));
		}

	toString()
		{
		return this.commands.join("");
		}
	}

const _Path = Path;

export { _Path as Path };
