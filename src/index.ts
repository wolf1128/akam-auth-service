import express from 'express';
import 'express-async-errors';
import config from './startup/config'

const app = express();
config();

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
	console.log(`Auth service is running on PORT ${PORT}....`);
});

module.exports = server;