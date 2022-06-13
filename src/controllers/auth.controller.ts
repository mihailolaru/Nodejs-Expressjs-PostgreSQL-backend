import express, { Request, Response } from 'express';

export const createUserController = async (req: Request, res: Response) => { 
	try {
		const dbREs = await db.query('');		
		res.send(dbREs);	
	} catch (err) {  
		res.send(`Crate user FAIL: ${err}`);
	};
};

export const signInController = async ( req: Request, res: Response ) => {
	try {
		const dbRes = await db.query('');
		res.send(dbRes); 	
	} catch (err) {  
		res.send(`Sing in FAIL: ${err}`);
	};
}

export const getUserInfoController = async( req: Request, res: Response ) => { 
	try {
		const dbRes = await db.query('');	
		res.send(dbRes);		
	} catch (err) {  
		res.send(`Get user info FAIL: ${err}`);
	};
}