export const carFleet = (target: number, position: number[], speed: number[]): number => {
	let fleets = 1;
	let minTime = Infinity;

	position
		.map((p, i) => ({distance: target - p, speed: speed[i]}))
		.sort((a, b) => a.distance - b.distance)
		.forEach(car => {
			const time = car.distance / car.speed;
			console.log(console.log({...car, time}));
			if (time > minTime) fleets++;
			minTime = time;
		});

	return fleets;
};