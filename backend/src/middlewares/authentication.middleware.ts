

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
    user?: unknown;
}

const authentication = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];    

    try {
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new Error("Missing or invalid authorization header");
        }
    
        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new Error("Token not provided");
        }

        const decoded = jwt.verify(token, process.env.SECRET || '');
        req.user = decoded;
        next();
    } catch (err) {
        console.error("Authentication error:", err);
        return res.status(401).send("Unauthorized: Invalid Token");
    }
};

export { authentication };
