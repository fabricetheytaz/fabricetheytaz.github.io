
import { Point } from "../geometry/Point.mjs";
import { Command } from "../Command.mjs";

class CubicCurve extends Command
	{
	/**
	 * @param {Point} startControlPoint
	 * @param {Point} endControlPoint
	 * @param {Point} point
	 */
	constructor(startControlPoint, endControlPoint, point)
		{
		super("C");

		this.startControlPoint = startControlPoint;
		this.endControlPoint = endControlPoint;
		this.point = point;
		}

	/**
	 * @returns {String}
	 */
	toString()
		{
		let start = this.pointToString(this.startControlPoint);
		let end = this.pointToString(this.endControlPoint);
		let p = this.pointToString(this.point);

		return `${this.name} ${start} ${end} ${p}`;
		}
	}

const _CubicCurve = CubicCurve;

export { _CubicCurve as CubicCurve };
