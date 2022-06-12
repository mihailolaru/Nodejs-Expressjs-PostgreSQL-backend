import express, { Request, Response} from 'express'
import pgp from 'pg-promise'; 
const db = pgp('postgress://admin:password@localhost:3001/expressTestDb');


export const allUsers = async(err: Error, req: Request, res: Response) => { 
	try {
		return await db.query('SELECT $1:name FROM $2:name', ['*', 'users'] );	
	} catch (err) {  
		return err;
	};
}