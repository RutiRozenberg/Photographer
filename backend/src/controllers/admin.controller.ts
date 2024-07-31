
import * as adminBl from '../bl/admin.bl'
import { Request, Response } from 'express';


/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: Admin
 *       required:
 *         - email
 *         - password
 *         - name
 *         - adminPassword
 *         - id 
 *       properties:
 *         email:
 *           type: string
 *           description: The admin's email
 *         password:
 *           type: string
 *           description: The admin's password
 *         name:
 *           type: string
 *           description: The admin's name
 *         adminPassword:
 *           type: string
 *           description: The admin's special password
 *         id:
 *           type: string
 *           description: The sdmin's id
 *       example:
 *         id: '4545d-dfbf'
 *         email: 'admin@example.com'
 *         password: 'admin123'
 *         name: 'Admin Name'
 *         adminPassword: 'specialPassword1234'
 */

/**
 * @swagger
 * /admin/signup:
 *   post:
 *     summary: Register a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       201:
 *         description: Admin created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
const adminSignUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, name , adminPassword} = req.body;
        if (!email || !password || !name || !adminPassword) {
            res.status(400).send({ error: "Email, password, name and adminPassword are required" });
        }
        const admin = await adminBl.signup(email, password, name, adminPassword);
        if (admin) {
            res.status(201).send(admin);
        } else {            
            res.status(400).send({ error: "Admin could not be created" });
        }
    } catch (err) {        
        res.status(400).send({ error: "Admin could not be created" });        
    }
};



/**
 * @swagger
 * /admin/signin:
 *   post:
 *     summary: Sign in an admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - adminPassword
 *             properties:
 *               email:
 *                 type: string
 *                 description: The admin's email
 *               password:
 *                 type: string
 *                 description: The admin's password
 *               adminPassword:
 *                 type: string
 *                 description: The admin's special password
 *             example:
 *               email: 'admin@example.com'
 *               password: 'admin123'
 *               adminPassword: 'specialPassword1234'
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
const adminSignIn = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password , adminPassword} = req.body;
        if (email && password && adminPassword) {
            const token = await adminBl.signin(email, password, adminPassword);
            if (token) {
                res.status(200).send(token);
            } else {
                res.status(401).send("Invalid credentials");
            }
        } else {
            res.status(400).send("Email password and adminPassword are required");
        }
    } catch (err) {
        res.status(404).send("Admin not found ");
        
    }
};



export { adminSignUp , adminSignIn }