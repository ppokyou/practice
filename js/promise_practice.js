function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done');
	});
}

timeout(10000).then((value) => {
	console.log(value);
}).catch((value => {
	console.log('Error happens.');
}));


const getJSON = function(url) {
	return new Promise(function(resolve, reject){
		const handler = function(){
			if (this.readyState !== 4){
				return;
			}
			if (this.status === 200){
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};

		const client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = "json";
		client.setRequestHeader("Accept", "application/json");
		client.send();
	});
}

getJSON("/post.json").then(function(json){
	console.log('Contents: ' + json);
}, function(error){
	console.error('Error hanppens', error);
});