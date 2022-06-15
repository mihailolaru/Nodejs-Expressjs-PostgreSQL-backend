import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authCheckMiddleware = async (req: Request, res: Response, next: NextFunction) => {  
	const bearerHeader = req.headers['authorization'];
	if (typeof bearerHeader !== 'undefined') {
		const bearer = bearerHeader.split(' ');
		const bearerToken = bearer[1];			
		try {
			const secret = <string>process.env.SECRETKEY;
			const decoded = jwt.verify(bearerToken, secret);
			if(decoded)next();
		} catch (err) { 
		res.status( 403 ).json( {
			err: "Access denied.",
		});
		}
	}
};