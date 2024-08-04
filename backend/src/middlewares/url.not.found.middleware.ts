import { Request, Response } from 'express';

const urlnotFound = (req: Request, res: Response) => {
    res.status(404).json({
        error: 'Not Found',
        message: `Cannot find ${req.originalUrl} on this server`
    });
};

export default urlnotFound;
