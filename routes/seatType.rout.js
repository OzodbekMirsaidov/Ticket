const express = require("express");
const router = express.Router();
const seatTypeController = require("../controller/seatType.controller")



/**
 * @swagger
 * tags:
 *   name: seatType
 *   description: seatType managament
 */

/**
 * @swagger
 * /api/seatType:
 *   post:
 *     tags: [seatType]
 *     summary: create a new seatType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: seatType created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/seatType",  seatTypeController.createseatType);

/**
 * @swagger
 * /api/seatType:
 *   get:
 *     tags: [seatType]
 *     summary: get all seatType
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:   
 *       '200':
 *         description: List of seatType
 *       '500':
 *         description: server error
 */
router.get("/seatType", seatTypeController.getseatTypes);

/**
 * @swagger
 * /api/seatType/{id}:
 *   get:
 *    summary: get the seatType by id
 *    tags: [seatType]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: seatType ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: seatType details
 *      404:
 *        description: seatType not Found
 *      500:
 *        description: Server error
 */

router.get("/seatType/:id", seatTypeController.getseatTypeById);


/**
 * @swagger
 *  /api/seatType/{id}:
 *   put:
 *     tags: [seatType]
 *     summary: Update seatType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: seatType ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: seatType updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: seatType not fount
 *       '500':
 *         description: Server error
 */

router.put("/seatType/:id", seatTypeController.updateseatType);


/**
 * @swagger
 * /api/seatType/{id}:
 *   delete:
 *     tags: [seatType]
 *     summary: Delete a seatType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: seatType ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: seatType  deleted 
 *       '404':
 *         description: seatType  not found
 *       '500':
 *         description: Server error
 */

router.delete("/seatType/:id", seatTypeController.deleteseatType); 

module.exports = router; 
