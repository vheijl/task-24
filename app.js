const express = require("express");
const app = express();
const info = require('./data.json');

const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/data', function (req, res) {
	res.send(info)
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});