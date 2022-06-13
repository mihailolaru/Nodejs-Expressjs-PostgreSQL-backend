import { Request, Response, NextFunction } from 'express';
import { client } from '../db/db.config';

export const authCheckMiddleware = async (req: Request, res: Response, next: NextFunction) => {  
	try {
		client.connect();
		const dbRes = await client.query('');
		console.log(dbRes);
		res.send(dbRes);
		await client.end();

		if ( dbRes ) {
			next();			
		} else {
			res.status( 403 ).json( {
				err: "Access denied. Please login.",
			} );
		}
	} catch ( err ) {
		res.send( `Could not connect to the database: ${err}` );
	}
};

export const checkAuthorMiddleware  = async (req: Request, res: Response, next: NextFunction) => {  
	try {
		client.connect();
		const dbRes = await client.query('');
		console.log(dbRes);
		res.send(dbRes);
		await client.end();

		if ( dbRes ) {
			next();			
		} else {
			res.status( 403 ).json( {
				err: "Access denied.",
			} );
		}
	} catch ( err ) {
		res.send( `Could not connect to the database: ${err}` );

	}
};


