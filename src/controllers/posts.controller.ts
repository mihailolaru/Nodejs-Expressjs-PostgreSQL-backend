import { Request, Response } from 'express';
import { client } from '../db/db.config';

export const createPostController = async ( req: Request, res: Response ) => {
	try {    
		client.connect();	
		const dbRes = await client.query('');
		console.log(dbRes);
		res.send(dbRes);
		await client.end();	
    } catch (err) {       
         res.send( `Post creation FAIL: ${err}` );
    }
};

export const getAllPostsController = async ( req: Request, res: Response ) => {
	try {
		client.connect();	
		const dbRes = await client.query('');
		console.log(dbRes);
		res.send(dbRes);
		await client.end();	
	} catch (err) {  
		 res.send( `Get posts FAIL: ${err}` );
	};
};

export const getPostController = async ( req: Request, res: Response ) => {
	try {    
		client.connect();	
		const dbRes = await client.query('');
		console.log(dbRes);
		res.send(dbRes);
		await client.end();	
    } catch (err) {       
        res.send(`Get post FAIL: ${err}`);
    }
};

export const updatePostController = async ( req: Request, res: Response ) => {
	try {    
		client.connect();	
		const dbRes = await client.query('');
		console.log(dbRes);
		res.send(dbRes);
		await client.end();	
    } catch (err) {       
        res.send(`Post update FAIL: ${err}`);
    }
}; 

export const deletePostController = async (req: Request, res: Response) => {
	try {    
		client.connect();	
		const dbRes = await client.query('');
        console.log(dbRes);	
        res.status(200).send('Post deletion SUCCESS');
		await client.end();	        
    } catch (err) {       
        res.send(`Post deletion FAIL: ${err}`);
    }
};