import { Request, Response, NextFunction } from 'express';
import { client } from '../db/db.config';
import jwt from 'jsonwebtoken';

export const authCheckMiddleware = async (req: Request, res: Response, next: NextFunction) => {  
	const { userId, email, password } = req.body; 
	const user = {
		id: userId,
		email: email,
		password: password,
	};
	try {
		jwt.sign({ user }, 'mySecret', (err, token) => { 
			if(err) { 
				res.status( 403 ).json( {
					err: "Access denied. Please login.",
				});
			}
			token 
			next();
		});	
	} catch ( err ) {
		res.send( `Could not connect to the database: ${err}` );
	}
};