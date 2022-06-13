import { Request, Response, NextFunction } from 'express';

exports.authCheckMiddleware = async (req: Request, res: Response, next: NextFunction) => {  
	const user = "";

	if (user) {
		res.status(403).json({
		err: "Admin resource. Access denied.",
		});
	} else {
		next();
	}

};

exports.checkAuthorMiddleware  = async (req: Request, res: Response, next: NextFunction) => {  
	const author = "";

	if (user) {
		res.status(403).json({
		err: "Admin resource. Access denied.",
		});
	} else {
		next();
	}

};


