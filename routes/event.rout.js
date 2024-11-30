const express = require("express");
const router = express.Router();
const eventController = require("../controller/event.controller")



/**
 * @swagger
 * tags:
 *   name: event
 *   description: event managament
 */

/**
 * @swagger
 * /api/event:
 *   post:
 *     tags: [event]
 *     summary: create a new event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: date
 *               start_time:
 *                 type: date
 *               finish_date:
 *                 type: date
 *               finish_time:
 *                 type: date
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: date
 *     responses:
 *       '201':
 *         description: event created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/event", eventController.createEvent);

/**
 * @swagger
 * /api/event:
 *   get:
 *     tags: [event]
 *     summary: get all event
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: List of event
 *       '500':
 *         description: server error
 */
router.get("/event", eventController.getEvents);

/**
 * @swagger
 * /api/event/{id}:
 *   get:
 *    summary: get the event by id
 *    tags: [event]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: event ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: event details
 *      404:
 *        description: event not Found
 *      500:
 *        description: Server error
 */

router.get("/event/:id", eventController.getEventById);


/**
 * @swagger
 *  /api/event/{id}:
 *   put:
 *     tags: [event]
 *     summary: Update event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: date
 *               start_time:
 *                 type: date
 *               finish_date:
 *                 type: date
 *               finish_time:
 *                 type: date
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: date
 *     responses:
 *       '200':
 *         description: event updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: event not fount
 *       '500':
 *         description: Server error
 */

router.put("/event/:id", eventController.updateEvent);


/**
 * @swagger
 * /api/event/{id}:
 *   delete:
 *     tags: [event]
 *     summary: Delete a event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: event ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: event  deleted 
 *       '404':
 *         description: event  not found
 *       '500':
 *         description: Server error
 */

router.delete("/event/:id", eventController.deleteEvent);

module.exports = router;