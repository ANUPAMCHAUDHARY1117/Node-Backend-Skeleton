const bcrypt = require('bcrypt');
const Boom = require('@hapi/boom');
const User = require('../../../db/models/user');
const jwt = require('../../../utils/jwt');
const errorReponse = require('../../../utils/error-response');

module.exports = (req, res) => {
	User.findOne({ email: req.body.email }, function(err, user) {
		if (err) {
			const { output } = Boom.badImplementation();
			return errorReponse(res, output);
		}
		if (!user) {
			const { output } = Boom.notFound('No user found.');
			return errorReponse(res, output);
		}

		const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			const { output } = Boom.unauthorized({ auth: false, token: null });
			return errorReponse(res, output);
		}

		const token = jwt.sign(user._id);

		res.status(200).send({ auth: true, token: token });
	});
};
