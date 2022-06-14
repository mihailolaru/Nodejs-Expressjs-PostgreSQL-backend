import { Request, Response } from 'express';
import { client } from '../db/db.config';

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

export const signInController = async ( req: Request, res: Response ) => {
	try {
		client.connect();	
		const dbRes = await client.query('');
		//console.log(dbRes);
		res.send(dbRes);
		await client.end();		
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