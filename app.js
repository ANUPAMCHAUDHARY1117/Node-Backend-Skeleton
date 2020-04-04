const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.port || 3000;
const db = require('./services/database');
const router = require('./routes/index');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to the database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', router);

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
