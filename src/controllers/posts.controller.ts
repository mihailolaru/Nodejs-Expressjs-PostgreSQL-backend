import express, { Request, Response } from 'express';

exports.createPostController = async ( req: Request, res: Response ) => {
	try {    
		const dbRes =  await db.query('');
        res.json(dbRes);
    } catch (err) {       
         res.send( `Post creation FAIL: ${err}` );
    }
};

exports.getAllPostsController = async ( req: Request, res: Response ) => {
	try {
		const dbRes = await db.query('');	
		res.json(dbRes);
	} catch (err) {  
		 res.send( `Get posts FAIL: ${err}` );
	};
};

exports.getPostController = async ( req: Request, res: Response ) => {
	try {    
		const dbRes =  await db.query('');
        res.json(dbRes);
    } catch (err) {       
        res.send(`Get post FAIL: ${err}`);
    }
};

exports.updatePostController = async ( req: Request, res: Response ) => {
	try {    
		const dbRes =  await db.query('');
        res.json(dbRes);
    } catch (err) {       
        res.send(`Post update FAIL: ${err}`);
    }
}; 

exports.deletePostController = async (req: Request, res: Response) => {
	try {    
		const dbRes =  await db.query('');
        res.status(200).send('Post deletion SUCCESS');
    } catch (err) {       
        res.send(`Post deletion FAIL: ${err}`);
    }
};