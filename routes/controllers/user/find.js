const Boom = require('@hapi/boom');
const User = require('../../../db/models/user');
const jwt = require('../../../utils/jwt');
const errorReponse = require('../../../utils/error-response');

module.exports = (req, res) => {
	const token = req.headers['x-access-token'];
	try {
		const jwtToken = jwt.verify(token);
		User.findById(jwtToken.id, (err, user) => {
			if (err) {
				const { output } = Boom.badImplementation('There was a problem finding the user');
				return errorReponse(res, output);
			}
			if (!user) {
				const { output } = Boom.notFound('No user found.');
				return errorReponse(res, output);
			}

			res.status(200).send(user);
		});
	} catch (err) {
		const { output } = Boom.badImplementation('Failed to authenticate the token');
		return errorReponse(res, output);
	}
};
