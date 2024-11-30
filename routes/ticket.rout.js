const express = require("express");
const router = express.Router();
const TicketController = require("../controller/ticket.controller")



/**
 * @swagger
 * tags:
 *   name: ticket
 *   description: ticket managament
 */

/**
 * @swagger
 * /api/ticket:
 *   post:
 *     tags: [ticket]
 *     summary: create a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               service_fee:
 *                 type: string
 *               price:
 *                 type: string
 *               status_id  :
 *                 type: number
 *               ticket_type:
 *                 type: string
 *     responses:
 *       '201':
 *         description: ticket created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/ticket", TicketController.createTicket);

/**
 * @swagger
 * /api/ticket:
 *   get:
 *     tags: [ticket]
 *     summary: get all ticket
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: List of ticket
 *       '500':
 *         description: server error
 */
router.get("/ticket", TicketController.getTickets);

/**
 * @swagger
 * /api/ticket/{id}:
 *   get:
 *    summary: get the ticket by id
 *    tags: [ticket]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ticket ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: ticket details
 *      404:
 *        description: ticket not Found
 *      500:
 *        description: Server error
 */

router.get("/ticket/:id", TicketController.getTicketById);


/**
 * @swagger
 *  /api/ticket/{id}:
 *   put:
 *     tags: [ticket]
 *     summary: Update ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               service_fee:
 *                 type: string
 *               price:
 *                 type: string
 *               status_id:
 *                 type: number
 *               ticket_type:
 *                 type: string
 *     responses:
 *       '200':
 *         description: ticket updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: ticket not fount
 *       '500':
 *         description: Server error
 */

router.put("/ticket/:id", TicketController.updateTicket);


/**
 * @swagger
 * /api/ticket/{id}:
 *   delete:
 *     tags: [ticket]
 *     summary: Delete a ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ticket ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: ticket  deleted 
 *       '404':
 *         description: ticket  not found
 *       '500':
 *         description: Server error
 */

router.delete("/ticket/:id", TicketController.deleteTicket);

module.exports = router;