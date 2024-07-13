import { Business } from "../models/business.model"
import * as businessBl from "../bl/business.bl"
import { Request, Response } from 'express';


/**
 * @swagger
 * components:
 *   schemas:
 *     Business:
 *       type: object
 *       required:
 *         - address
 *         - name
 *         - email
 *         - phone
 *       properties:
 *         address:
 *           type: string
 *           description: The business address
 *         name:
 *           type: string
 *           description: The business name
 *         email:
 *           type: string
 *           description: The business email
 *         phone:
 *           type: string
 *           description: The business phone number
 *       example:
 *         address: '123 Main Street'
 *         name: 'ABC Company'
 *         email: 'info@abccompany.com'
 *         phone: '123-456-7890'
 */

/**
 * @swagger
 * tags:
 *   name: Business
 *   description: APIs for managing business details
 */

/**
 * @swagger
 * /business:
 *   get:
 *     summary: Get business details
 *     tags: [Business]
 *     responses:
 *       200:
 *         description: Business details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 *       404:
 *         description: Business not found
 */
const getBusiness = async (req: Request, res: Response): Promise<void> => {
    try {
        const business: Business = await businessBl.getBusiness();
        res.status(200).send(business);
    } catch (err) {
        res.status(404).send("Business does not exist");
    }
}

/**
 * @swagger
 * /business:
 *   post:
 *     summary: Create a new business
 *     tags: [Business]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       201:
 *         description: Business created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 *       400:
 *         description: Invalid business details
 */
const createBusiness = async (req: Request, res: Response): Promise<void> => {
    try {
        const business: Business | null = req.body as unknown as Business;
        const newBusiness: Business = await businessBl.createBusiness(business);
        res.status(201).send(newBusiness);
    } catch (err) {
        res.status(400).send("Invalid business details");
    }
}

/**
 * @swagger
 * /business/{id}:
 *   put:
 *     summary: Update business details
 *     tags: [Business]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Business ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       200:
 *         description: Business details updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 *       400:
 *         description: Business update failed
 */
const updateBusiness = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const businessToUpdate: Business = req.body;
        const updatedBusiness: Business = await businessBl.updateBusiness(id, businessToUpdate) as unknown as Business;
        res.status(200).send(updatedBusiness);
    } catch (err) {
        res.status(400).send("Business update failed");
    }
}

/**
 * @swagger
 * /business/{id}:
 *   delete:
 *     summary: Delete a business
 *     tags: [Business]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Business ID
 *     responses:
 *       200:
 *         description: Business deletion successful
 *       400:
 *         description: Business deletion failed
 */
const deleteBusiness = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        await businessBl.deleteBusiness(id);
        res.status(200).send("Business deletion successful");
    } catch (err) {
        res.status(400).send("Business deletion failed");
    }
}

export { createBusiness, updateBusiness, getBusiness, deleteBusiness }
