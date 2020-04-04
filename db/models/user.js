const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: { type: String, required: true, max: 50, unique: false },
	email: { type: String, required: true, max: 50, unique: true },
	password: { type: String, required: true, max: 50 },
});

// Export the model
module.exports = mongoose.model('User', UserSchema);
