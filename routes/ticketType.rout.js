const express = require("express");
const router = express.Router();
const TicketTypeController = require("../controller/ticketType.controller")



/**
 * @swagger
 * tags:
 *   name: TicketType
 *   description: TicketType managament
 */

/**
 * @swagger
 * /api/TicketType:
 *   post:
 *     tags: [TicketType]
 *     summary: create a new TicketType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *               ticket_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: TicketType created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/TicketType", TicketTypeController.createticketType);

/**
 * @swagger
 * /api/TicketType:
 *   get:
 *     tags: [TicketType]
 *     summary: get all TicketType
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: List of TicketType
 *       '500':
 *         description: server error
 */
router.get("/TicketType", TicketTypeController.getticketTypes);

/**
 * @swagger
 * /api/TicketType/{id}:
 *   get:
 *    summary: get the TicketType by id
 *    tags: [TicketType]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: TicketType ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: TicketType details
 *      404:
 *        description: TicketType not Found
 *      500:
 *        description: Server error
 */

router.get("/TicketType/:id", TicketTypeController.getticketTypeById);


/**
 * @swagger
 *  /api/TicketType/{id}:
 *   put:
 *     tags: [TicketType]
 *     summary: Update TicketType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketType ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *               ticket_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: TicketType updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: TicketType not fount
 *       '500':
 *         description: Server error
 */

router.put("/TicketType/:id", TicketTypeController.updateticketType);


/**
 * @swagger
 * /api/TicketType/{id}:
 *   delete:
 *     tags: [TicketType]
 *     summary: Delete a TicketType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: TicketType ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: TicketType  deleted 
 *       '404':
 *         description: TicketType  not found
 *       '500':
 *         description: Server error
 */

router.delete("/TicketType/:id", TicketTypeController.deleteticketType);

module.exports = router;