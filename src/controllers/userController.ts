import { RequestHandler } from 'express';
import { generateToken, validateLoginUser, User } from '../models/userModel';

export const authUser: RequestHandler = async (req, res) => {
	const { error } = validateLoginUser(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const user = await User.findOne({ email: req.body.email });

	if (user && (await user.matchPassword(req.body.password))) {
		res.json({
			_id: user._id,
			email: user.email,
			group: user.group,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password.');
	}
};
