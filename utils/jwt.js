const jwt = require('jsonwebtoken');

const jwtOperation = {
	sign: function(id) {
		return jwt.sign({ id }, process.env.SECRET_KEY, {
			expiresIn: 864, // expires in 0.24 hours
		});
	},
	verify: function(token) {
		return jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
			if (err) {
				throw new Error(err);
			}
			return decoded;
		});
	},
};

module.exports = jwtOperation;
