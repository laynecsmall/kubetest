const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/', function (req, res) {
	const r = { bd: req.body, method: 'http'};
	fetch('http://localhost:5000', {method: 'POST', body: JSON.stringify(r)});
	res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

