const http = require('https');

const options = {
	method: 'GET',
	hostname: 'youtube-v31.p.rapidapi.com',
	port: null,
	path: '/search?q=Reactjs&part=snippet%2Cid&regionCode=IN&maxResults=25&order=date',
	headers: {
		'X-RapidAPI-Key': 'eba2ad9675msha3443a395c46dcbp1b4f38jsn9d05a818a94e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const Req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		return body;
	});
});


Req.end();