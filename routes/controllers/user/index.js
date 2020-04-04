const create = require('./create');
const find = require('./find');
const login = require('./login');
const user = {
	create,
	find,
	login,
};

module.exports = user;
