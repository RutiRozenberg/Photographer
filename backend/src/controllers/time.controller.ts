import { Time } from "../models/time.model";
import * as timeBL from '../bl/time.bl';
import { Request, Response } from 'express';

/**
 * @swagger
 * tags:
 *   name: Time
 *   description: APIs for managing times
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Time:
 *       type: object
 *       required:
 *         - id
 *         - date
 *         - isCatch
 *       properties:
 *         id:
 *           type: string
 *         date:
 *           type: string
 *           description: The time field in the format YYYY-MM-DDTHH:MM:SS.sssZ
 *         isCatch:
 *           type: boolean
 *           description: Indicates if time is caught
 *       example:
 *         id: '1dsvds-dvds'
 *         date: '2024-08-03T18:50:59.744Z'
 *         isCatch: false
 */

/**
 * @swagger
 * /time/{id}:
 *   get:
 *     summary: Get a time by ID
 *     tags: [Time]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: ID of the time to retrieve
 *     responses:
 *       200:
 *         description: Time details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Time'
 *       404:
 *         description: Time not found
 */
const getTimeById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const time: Time = await timeBL.getTimeById(id);
        res.status(200).send(time);
    } catch (err) {
        res.status(404).send("Time not found");
    }
}

/**
 * @swagger
 * /times:
 *   get:
 *     summary: Get all times
 *     tags: [Time]
 *     responses:
 *       200:
 *         description: List of all times
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Time'
 */
const getAllTimes = async(req: Request, res: Response) => {
    try {
        const allTimes: Time[] = await timeBL.getAllTimes();
        res.status(200).send(allTimes);
    } catch (err) {
        res.status(404).send("Not found");
    }
}

/**
 * @swagger
 * /time:
 *   post:
 *     summary: Create a new time
 *     tags: [Time]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Time'
 *     responses:
 *       201:
 *         description: Time created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Time'
 *       400:
 *         description: Invalid time details
 */
const createTime = async (req: Request, res: Response): Promise<void> => {
    try {        
        const time: Time | null = req.body as unknown as Time;
        const newTime: Time = await timeBL.createTime(time);
        res.status(201).send(newTime);
    } catch (err) {
        res.status(400).send("Invalid time details");
    }
}

/**
 * @swagger
 * /time/{id}:
 *   put:
 *     summary: Update a time by ID
 *     tags: [Time]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the time to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Time'
 *     responses:
 *       200:
 *         description: Time updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Time'
 *       400:
 *         description: Time update failed
 */
const updateTime = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const timeToUpdate: Time = req.body;
        await timeBL.updateTime(id, timeToUpdate);
        res.status(200).send("The update was successful");
    } catch (err) {
        res.status(400).send("Time update failed");
    }
}

/**
 * @swagger
 * /time/{id}:
 *   delete:
 *     summary: Delete a time by ID
 *     tags: [Time]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the time to delete
 *     responses:
 *       200:
 *         description: Time deleted successfully
 *       400:
 *         description: Time deletion failed
 */
const deleteTime = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        await timeBL.deleteTime(id);
        res.status(200).send("Time deletion successful");
    } catch (err) {
        res.status(400).send("Time deletion failed");
    }
}

/**
 * @swagger
 * /time/{id}/catch:
 *   put:
 *     summary: Mark a time as caught by ID
 *     tags: [Time]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the time to mark as caught
 *     responses:
 *       200:
 *         description: Time marked as caught successfully
 *       400:
 *         description: Marking time as caught failed
 */
const catchTime = async (req:Request , res:Response):Promise<void> =>{
    try{
        const parts = decodeURIComponent(req.url).split('/');
        const id = parts[2]; 
        await timeBL.catchTime(id);
        res.status(200).send("successful");
    }
    catch{
        res.status(400).send("faild")
    }
}

export { createTime, updateTime, getTimeById, deleteTime, getAllTimes , catchTime};
