import { Request, Response } from 'express';
import { client } from '../db/db.config';

export const createPostController = async (req: Request, res: Response) => {
	const {title, text, category, userId } = req.body;
	try {    
		client.connect();	
		const dbRes = await client.query(
			`INSERT INTO posts (title, text, category, author) 
			VALUES(
				${title},
				${text},
				${category},
				${userId}
    )`);
		//console.log(dbRes);
		res.send(dbRes);
		await client.end();	
    } catch (err) {       
         res.send( `Post creation FAIL: ${err}` );
    }
};

export const getAllPostsController = async ( req: Request, res: Response ) => {
	try {
		client.connect();	
		const dbRes = await client.query('SELECT * FROM posts');
		//console.log(dbRes);
		res.send(dbRes);
		await client.end();	
	} catch (err) {  
		 res.send( `Get posts FAIL: ${err}` );
	};
};

export const getPostController = async (req: Request, res: Response) => {
	const { postId } = req.body;
	try {    
		client.connect();	
		const dbRes = await client.query(`SELECT * FROM posts WHERE post_id=${postId}`);
		//console.log(dbRes);
		res.send(dbRes);
		await client.end();	
    } catch (err) {       
        res.send(`Get post FAIL: ${err}`);
    }
};

export const updatePostController = async (req: Request, res: Response) => {
	const { column, value, postId, author } = req.body;	
	try {    
		client.connect();	
		const dbRes = await client.query(`UPDATE posts SET ${column}=${value} WHERE post_id=${postId} AND author=${author}`);
		//console.log(dbRes);
		res.send(dbRes);
		await client.end();	
    } catch (err) {       
        res.send(`Post update FAIL: ${err}`);
    }
}; 

export const deletePostController = async (req: Request, res: Response) => {	
	const { postId, userId } = req.body;

	try {    
		client.connect();	
		const dbRes = await client.query(`DELETE FROM posts WHERE post_id=${postId} AND author=${userId}`);
        //console.log(dbRes);	
        res.status(200).send('Post deletion SUCCESS');
		await client.end();	        
    } catch (err) {       
        res.send(`Post deletion FAIL: ${err}`);
    }
};