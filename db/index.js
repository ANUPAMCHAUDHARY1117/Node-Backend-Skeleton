const MongoClient = require('mongodb').MongoClient;
const URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds145302.mlab.com:45302/chatbot`;
const client = new MongoClient(URL, { useNewUrlParser: true });
client.connect(err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Connected to client');
	// perform actions on the collection object
	client.close();
});
