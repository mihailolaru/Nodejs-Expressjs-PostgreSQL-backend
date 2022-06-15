import { Request, Response } from 'express';
import { client } from '../db/db.config';
import jwt from 'jsonwebtoken';

export const createUserController = async (req: Request, res: Response) => { 
	const { name, email, password } = req.body;
	try {
		client.connect();	
		const dbRes = await client.query(`INSERT INTO users (name, email, password) 
			VALUES(
				${name},
				${email},
				${password}				
    )`);	
		//console.log(dbRes);
		res.send(dbRes);
		await client.end();				
	} catch (err) {  
		res.send(`Crate user FAIL: ${err}`);
	};
};

export const signInController = async (req: Request, res: Response) => {
	//TODO get values from the req
	const email = '';
	const password = '';

	const user = {
		email: email,
		password: password,
	};

	try {
		client.connect();	
		const dbRes = await client.query('');

		//console.log(dbRes);		
		await client.end();	
	
		jwt.sign(
			{ user },
			'mySecret',
			{ algorithm: 'RS256' },
			(err, token) => {
				if (err) {
					console.log('Error signing token: ', err);
					return;
				}
				res.json({ token });
			}				
		);	
	} catch (err) {  
		res.send(`Sing in FAIL: ${err}`);
	};
}

export const getUserInfoController = async (req: Request, res: Response) => { 	
	try {	
		client.connect();	
		const dbRes = await client.query('');
		//console.log(dbRes);
		res.send(dbRes);
		await client.end();			
	} catch (err) {  
		res.send(`Get user info FAIL: ${err}`);
	};
}