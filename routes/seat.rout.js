const express = require("express");
const router = express.Router();
const seatController = require("../controller/seat.controller")



/**
 * @swagger
 * tags:
 *   name: seat
 *   description: seat managament
 */

/**
 * @swagger
 * /api/seat:
 *   post:
 *     tags: [seat]
 *     summary: create a new seat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_id:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       '201':
 *         description: seat created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/seat", seatController.createSeat);

/**
 * @swagger
 * /api/seat:
 *   get:
 *     tags: [seat]
 *     summary: get all seat
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: List of seat
 *       '500':
 *         description: server error
 */
router.get("/seat", seatController.getSeats);

/**
 * @swagger
 * /api/seat/{id}:
 *   get:
 *    summary: get the seat by id
 *    tags: [seat]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: seat ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: seat details
 *      404:
 *        description: seat not Found
 *      500:
 *        description: Server error
 */

router.get("/seat/:id", seatController.getSeatById);


/**
 * @swagger
 *  /api/seat/{id}:
 *   put:
 *     tags: [seat]
 *     summary: Update seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       '200':
 *         description: seat updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: seat not fount
 *       '500':
 *         description: Server error
 */

router.put("/seat/:id", seatController.updateSeat);


/**
 * @swagger
 * /api/seat/{id}:
 *   delete:
 *     tags: [seat]
 *     summary: Delete a seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: seat ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: seat  deleted 
 *       '404':
 *         description: seat  not found
 *       '500':
 *         description: Server error
 */

router.delete("/seat/:id", seatController.deleteSeat);

module.exports = router;