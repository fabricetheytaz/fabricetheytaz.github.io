
import { polygon } from "../../scripts/geometry.mjs";
import { circle as svgCircle } from "../../scripts/svg.mjs";

const POINTS = document.querySelector("#points");

let count = 0;

/*
 * @param {Number} centerX
 * @param {Number} centerY
 * @param {Number} r
 * @param {String} color
 * 
 * @returns {Array}
 *
 function makeCircles(count, centerX, centerY, r, color)
 {
 return serie(count)
	 .map(toRadian(count))
	 .map(toXY(r))
	 .map(toCircle(centerX, centerY, r, color));
 }
*/
function makeCircles(count, centerX, centerY, r, color)
	{
	let points = polygon(count, r);
	//console.log(points);

	let circles = points.map(point =>
		{
		let circle = svgCircle(centerX + point.x, centerY + point.y, r);

		circle.setAttribute("fill", color);

		return circle;
		});

	return circles;
	}

/*
function draw()
	{
	POINTS.textContent = "";

	makeCircles(count, 50, 50, 5, "gold").forEach(circle => POINTS.appendChild(circle));
	}
*/

function add()
	{
	count++;

	//draw();

	POINTS.textContent = "";

	makeCircles(count, 50, 50, 5, "gold").forEach(circle => POINTS.appendChild(circle));
	}

document.querySelector("#add").addEventListener("click", add, false);
