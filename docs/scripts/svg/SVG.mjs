
const _SVG_NAMESPACE = "http://www.w3.org/2000/svg";

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

	/**
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} r
	 * @param {Object} attributes
	 */
	static circle(x, y, r, attributes = {})
		{
		return SVG.createElement("circle", { ...{ cx: x, cy: y, r: r}, ...attributes });
		}
	}

const _SVG = SVG;

export { _SVG as SVG };
