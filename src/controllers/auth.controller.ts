import express, { Request, Response } from 'express';

exports.createUserController = () => { 
		try {
		return await db.query('SELECT $1:name FROM $2:name', ['*', 'users'] );	
	} catch (err) {  
		return err;
	};
};

exports.signInController = () => {
		try {
		return await db.query('SELECT $1:name FROM $2:name', ['*', 'users'] );	
	} catch (err) {  
		return err;
	};
}

exports.getUserInfoController = async(err: Error, req: Request, res: Response) => { 
	try {
		return await db.query('SELECT $1:name FROM $2:name', ['*', 'users'] );	
	} catch (err) {  
		return err;
	};
}