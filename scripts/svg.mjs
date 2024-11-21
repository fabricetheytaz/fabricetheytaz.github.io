
import { Point } from "./geometry.mjs";

const _SVG_NAMESPACE = "http://www.w3.org/2000/svg";

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

function _d(points)
	{
	let d = "";

	let first = points.shift();

	d += `M ${first.x + 100} ${first.y + 100} `;

	points.forEach(point =>
		{
		d += `L ${point.x + 100} ${point.y + 100} `;
		});

	d += "Z";

	return d;
	}

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

	static d(points)
		{
		return _d(points);
		}

	toString()
		{
		return this.commands.join("");
		}
	}

const _Path = Path;

class SVG
	{
	constructor()
		{
		}

	static get NAMESPACE()
		{
		return _SVG_NAMESPACE;
		}

	/**
	 * @param {String} tagName
	 * @param {Object} attributes
	 */
	static createElement(tagName, attributes = {})
		{
		let element = document.createElementNS(_SVG_NAMESPACE, tagName);

		for (let [key, value] of Object.entries(attributes))
			{
			element.setAttribute(key, value);
			}

		return element;
		}
	}

const _SVG = SVG;

export
	{
	_Command as Command,
	_MoveTo as MoveTo,
	_LineTo as LineTo,
	_QuadraticCurve as QuadraticCurve,
	_CubicCurve as CubicCurve,
	_ClosePath as ClosePath,
	_Path as Path,
	_SVG as SVG
	};
