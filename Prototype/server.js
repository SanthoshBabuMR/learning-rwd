var express      	= require("express"),
	bodyParser      = require('body-parser'),
    app		        = express();

app.use(bodyParser.json());
app.use(express.static("app"));


app.post("/pin", function(req, res) {
	console.log(req.body.pin);
	res.json({
		name: "Tom Jones",
		products: ['Online Banking', 'BDA'],
		applicationId: "15421"
	})
});

app.get("/client-details", function(req, res) {
	res.json({
		name: "Tom Jones",
		products: ['Online Banking', 'BDA'],
		applicationId: "15421"
	})
});
app.listen(6060,function(){
    console.log("server listening on 6060")
});
