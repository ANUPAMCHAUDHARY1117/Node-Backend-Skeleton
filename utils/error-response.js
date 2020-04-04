const errorResponse = (res, output) => {
	return res.status(output.statusCode).send(output.payload);
};

module.exports = errorResponse;
