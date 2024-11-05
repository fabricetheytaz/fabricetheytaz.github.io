
import { Point } from "../geometry/Point.mjs";
import { Command } from "../Command.mjs";

class QuadraticCurve extends Command
	{
	/**
	 * @param {Point} controlPoint
	 * @param {Point} point
	 */
	constructor(controlPoint, point)
		{
		super("Q");

		this.controlPoint = controlPoint;
		this.point = point;
		}

	/**
	 * @returns {String}
	 */
	toString()
		{
		let cp = this.pointToString(this.controlPoint);
		let p = this.pointToString(this.point);

		return `${this.name} ${cp} ${p}`;
		}
	}

const _QuadraticCurve = QuadraticCurve;

export { _QuadraticCurve as QuadraticCurve };
