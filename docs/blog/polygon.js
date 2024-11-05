

//const SHAPE = document.querySelector("#shape");



	

	/*
	let points = serie(count);
	//console.log(points);

	let angles = points.map(toRadian(count, false));
	//console.log(angles);

	let positions = angles.map(toXY(45));
	//console.log(positions);

	let circles = positions.map(toCircle(50, 50, 2));
	//console.log(circles);

	circles.forEach(circle => ANGLES.appendChild(circle));
	*/

	/*
	serie(count)
		.map(toRadian(count, false))
		.map(toXY(45))
		.map(toCircle(50, 50, 2))
		.forEach(circle => ANGLES.appendChild(circle));
	*/

	/*
	for (let i = 0; i < count; i++)
		{
		//console.log(i);
		//return x => TWO_PI * x / count;

		// Angle en radians
		let angle = 2 * Math.PI * i / count;

		let x = 50 + 45 * Math.cos(angle);
		let y = 50 + 45 * Math.sin(angle);

		//let circle = `<circle cx="${x}" cy="${y}" r="2" fill="red" />`;
		let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

		circle.setAttribute("cx", x);
		circle.setAttribute("cy", y);
		circle.setAttribute("r", i + 1);
		circle.setAttribute("fill", "red");

		ANGLES.appendChild(circle);
		}
	*/
