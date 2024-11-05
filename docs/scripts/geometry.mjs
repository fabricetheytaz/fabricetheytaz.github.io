
import { sequence } from "./array.mjs";

const _TWO_PI = Math.PI * 2.0;



//function clockwise(){}

/**
 * @param {Number} count
 * 
 * @returns {Function}
 */
function toRadian(count)
	{
	return x => _TWO_PI * x / count;
	}

/*
 * @param {Number} numberOfPoints
 * @param {Boolean} clockwise
 * 
 * @returns {Function}
 *
function toRadian(numberOfPoints, clockwise = true)
	{
	const DIRECTION = clockwise ? 1 : -1;

	return point => 2 * Math.PI * (point * DIRECTION) / numberOfPoints;
	}
*/

/**
 * @param {Number} r // radius // Pas sur radius (r de SVG)
 * 
 * @returns {Function}
 */
function toXY(r)
	{
	return angle =>
		{
		let x = r * Math.cos(angle);
		let y = r * Math.sin(angle);

		return {x: x, y: y};
		};
	}

function polygon(count, r)
	{
	return sequence(count)    // Créer une suite 0, 1,... (sommets)
		.map(toRadian(count)) // Convertir en angle en radians
		.map(toXY(r));        // Convertir en coordonnées X, Y
	}

export
	{
	toRadian,
	toXY,
	polygon
	};
