const express = require("express");
const router = express.Router();
const eventTypeController = require("../controller/eventType.controller")



/**
 * @swagger
 * tags:
 *   name: eventType
 *   description: eventType managament
 */

/**
 * @swagger
 * /api/eventType:
 *   post:
 *     tags: [eventType]
 *     summary: create a new eventType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: string
 *     responses:
 *       '201':
 *         description: eventType created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/eventType",  eventTypeController.createeventType);

/**
 * @swagger
 * /api/eventType:
 *   get:
 *     tags: [eventType]
 *     summary: get all eventType
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:   
 *       '200':
 *         description: List of eventType
 *       '500':
 *         description: server error
 */
router.get("/eventType", eventTypeController.geteventTypes);

/**
 * @swagger
 * /api/eventType/{id}:
 *   get:
 *    summary: get the eventType by id
 *    tags: [eventType]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: eventType ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: eventType details
 *      404:
 *        description: eventType not Found
 *      500:
 *        description: Server error
 */

router.get("/eventType/:id", eventTypeController.geteventTypeById);


/**
 * @swagger
 *  /api/eventType/{id}:
 *   put:
 *     tags: [eventType]
 *     summary: Update eventType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: eventType ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: string
 *     responses:
 *       '200':
 *         description: eventType updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: eventType not fount
 *       '500':
 *         description: Server error
 */

router.put("/eventType/:id", eventTypeController.updateeventType);


/**
 * @swagger
 * /api/eventType/{id}:
 *   delete:
 *     tags: [eventType]
 *     summary: Delete a eventType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: eventType ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: eventType  deleted 
 *       '404':
 *         description: eventType  not found
 *       '500':
 *         description: Server error
 */

router.delete("/eventType/:id", eventTypeController.deleteeventType); 

module.exports = router; 
