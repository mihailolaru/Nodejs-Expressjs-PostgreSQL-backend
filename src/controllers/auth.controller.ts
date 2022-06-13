import express, { Request, Response } from 'express';

exports.createUserController = async ( req: Request, res: Response ) => { 
	try {
		const dbREs = await db.query('');		
		res.send(dbREs);	
	} catch (err) {  
		res.send(`Crate user FAIL: ${err}`);
	};
};

exports.signInController = async ( req: Request, res: Response ) => {
	try {
		const dbRes = await db.query('');
		res.send(dbRes); 	
	} catch (err) {  
		res.send(`Sing in FAIL: ${err}`);
	};
}

exports.getUserInfoController = async( req: Request, res: Response ) => { 
	try {
		const dbRes = await db.query('');	
	} catch (err) {  
		res.send(`Get user info FAIL: ${err}`);
	};
}