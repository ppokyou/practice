var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
	for (let i = 0; i<a.length; i++){
		if (typeof a[i] !== 'number') {
			yield* flat(a[i]);
		  } else {
			yield a[i];
		  }
	}
};

for (var f of flat(arr)){
  console.log(f);
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...myIterable]);

for (var item of [...myIterable]){
	console.log(item);
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function* objectEntries(obj){
	let propKeys = Reflect.ownKeys(obj);
	for (let kwy of propKeys){
		yield [kwy, obj[kwy]];
	}
}

let jane = {first: 'Jane', last: 'Doe'};

for (let value of objectEntries(jane)){
	console.log(value);
}


