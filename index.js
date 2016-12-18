// Note: This package was made as a replacement for the body-parser package. 
// The original package fails to parse the request body when the content-encoding header is invalid.

exports.raw = function () {
	return function (req, resp, next) {
		let data = "";

		req.on("data", c => data += c);
		req.on("end", () => {
			req.body = data;
			next();
		});
	}
};

exports.json = function () {
	return function (req, resp, next) {
		let data = "";

		req.on("data", c => data += c);
		req.on("end", () => {
			req.body = JSON.parse(data);
			next();
		});
	}
}