const path = require('path');
const fs = require("fs");
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/web/index.dev.html'));
});

app.get('/infodata', (req, res) => {
	res.sendFile(path.join(__dirname, '/infoData.json'));
});

const port = 8888;
app.listen(port, 'localhost', err => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(`Listening at http://localhost: ${port}`);
});
