const bcrypt = require('bcrypt');
const Boom = require('@hapi/boom');
const User = require('../../../db/models/user');
const jwt = require('../../../utils/jwt');
const errorReponse = require('../../../utils/error-response');

module.exports = (req, res) => {
	const newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
	});
	newUser.save((err, user) => {
		if (err) {
			const { output } = Boom.badRequest(err);
			return errorReponse(res, output);
		}
		const token = jwt.sign(user._id);
		res.status(200).send({ auth: true, token: token });
	});
};
