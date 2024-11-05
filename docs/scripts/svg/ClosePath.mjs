
import { Command } from "../Command.mjs";

class ClosePath extends Command
	{
	constructor()
		{
		super("Z");
		}

	/**
	 * @returns {String}
	 */
	toString()
		{
		return `${this.name}`;
		}
	}

const _ClosePath = ClosePath;

export { _ClosePath as ClosePath };
