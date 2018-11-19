const f = () => {console.log('now');}

// (async () => f())();
(
	() => new Promise(
		resolve => resolve(f())
	)
)();

console.log('next');