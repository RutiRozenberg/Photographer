import { signin, signup } from "../bl/user.bl"
import { Request, Response } from 'express';


export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - name
 *       properties:
 *         email:
 *           type: string
 *           description: The user's email
 *         password:
 *           type: string
 *           description: The user's password
 *         name:
 *           type: string
 *           description: The user's name
 *       example:
 *         email: 'user@example.com'
 *         password: 'password123'
 *         name: 'John Doe'
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
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

/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Sign in a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email
 *               password:
 *                 type: string
 *                 description: The user's password
 *             example:
 *               email: 'user@example.com'
 *               password: 'password123'
 *     responses:
 *       200:
 *         description: Signed in successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
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
