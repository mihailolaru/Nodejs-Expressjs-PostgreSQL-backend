import { Request, Response } from 'express';
import { client } from '../db/db.config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const createUserController = async (req: Request, res: Response) => { 
	// TODO Extract data from the req
	const { name, email, password } = req.body;
	const saltRounds = 123456;	

	try {
		client.connect();
		//Check if the user email exist in the database. If FALSE the execute.
		const userExists = await client.query(`SELECT 1 FROM users WHERE email = ${email}`);

		if (!userExists) {
			bcrypt.genSalt(saltRounds, function (err, salt) {
				bcrypt.hash(password, salt, async (err, hash) => {
					// Store hash in your password DB.			
					const dbRes = await client.query(`INSERT INTO users (name, email, password) 
				VALUES(
					${name},
					${email},
					${hash}				
				)`);					
				res.send(dbRes);
				return;
				});
			});
		}
		throw 'User with this email already exits';
	} catch (err) {
		res.send(`Crate user FAIL: ${err}`);
	} finally { 
		await client.end();
	};
};

export const signInController = async (req: Request, res: Response) => {
	//TODO get values from the req
	const email = '';
	const password = '';
	const userId = '';

	// 'iat' stands for issued is included as a varying value in order the token to be different on every sign.
	const user = {
		email: email,
		userId: userId,
		iat: Math.floor(Date.now()/1000),
	};

	try {
		client.connect();	
		const checkUser = await client.query('');

		const user = {
			email: email,
			userId: userId,
			iat: Math.floor(Date.now()/1000),
		};
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
		console.log(dbRes);
		res.send('dbRes');
		await client.end();			
	} catch (err) {  
		res.send(`Get user info FAIL: ${err}`);
	};
}