# bodyparser
A very simple http request body parser. (That won't fail on invalid request-encoding header...)

## How to use with express web server

```
const bodyparser = require("@aeinbu/bodyparser");

// set up express
// ...

app.post("somepage",
	bodyparser.raw(),
	function(req, resp){
		// The raw body data is avaliable as req.body
		// ...
	});

app.post("otherpage",
	bodyparser.json(),
	function(req, resp){
		// The body json data is avaliable as req.body
		// ...
	});
```