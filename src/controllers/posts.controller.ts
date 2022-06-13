import express, { Request, Response } from 'express';

export const createPostController = async ( req: Request, res: Response ) => {
	try {    
		const dbRes =  await db.query('');
        res.json(dbRes);
    } catch (err) {       
         res.send( `Post creation FAIL: ${err}` );
    }
};

export const getAllPostsController = async ( req: Request, res: Response ) => {
	try {
		const dbRes = await db.query('');	
		res.json(dbRes);
	} catch (err) {  
		 res.send( `Get posts FAIL: ${err}` );
	};
};

export const getPostController = async ( req: Request, res: Response ) => {
	try {    
		const dbRes =  await db.query('');
        res.json(dbRes);
    } catch (err) {       
        res.send(`Get post FAIL: ${err}`);
    }
};

export const updatePostController = async ( req: Request, res: Response ) => {
	try {    
		const dbRes =  await db.query('');
        res.json(dbRes);
    } catch (err) {       
        res.send(`Post update FAIL: ${err}`);
    }
}; 

export const deletePostController = async (req: Request, res: Response) => {
	try {    
		const dbRes =  await db.query('');
        res.status(200).send('Post deletion SUCCESS');
    } catch (err) {       
        res.send(`Post deletion FAIL: ${err}`);
    }
};