import { signin, signup } from "../bl/user.bl"
import { Request, Response } from 'express';


export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}


const postSignUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password || !name) {
            res.status(400).send({ error: "Email, password, and name are required" });
        }
        console.log(1111111111111111);
        const user = await signup(email, password, name);
        if (user) {
            res.status(201).send(user);
        } else {
            res.status(400).send({ error: "User could not be created" });
        }
    } catch (err) {
        res.status(400).send({ error: "User could not be created, Try another one" });
        

    }
};


const postSignIn = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const token = await signin(email, password);
            if (token) {
                res.status(200).send(token);
            } else {
                res.status(401).send("Invalid credentials");
            }
        } else {
            res.status(400).send("Email and password are required");
        }
    } catch (err) {
        res.status(500).send("Failed to sign in");
    }
};


export { postSignUp, postSignIn }
