
import { Response, NextFunction } from 'express';
import { AuthRequest } from '../models/authRequest.model';


const authorization = (req: AuthRequest, res: Response, next: NextFunction) => {
    const adminRole = req.user ; 

    if (adminRole && adminRole.isAdmin === false) {
        return res.status(403).send("Forbidden: User does not have the necessary role");
    }

    next();
};

export { authorization };