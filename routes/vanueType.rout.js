const express = require("express");
const router = express.Router();
const venueTypeController = require("../controller/venueType.controller")



/**
 * @swagger
 * tags:
 *   name: venueType
 *   description: venueType managament
 */

/**
 * @swagger
 * /api/venueType:
 *   post:
 *     tags: [venueType]
 *     summary: create a new venueType
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
 *         description: venueType created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/venueType",  venueTypeController.createvenueType);

/**
 * @swagger
 * /api/venueType:
 *   get:
 *     tags: [venueType]
 *     summary: get all venueType
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:   
 *       '200':
 *         description: List of venueType
 *       '500':
 *         description: server error
 */
router.get("/venueType", venueTypeController.getvenueTypes);

/**
 * @swagger
 * /api/venueType/{id}:
 *   get:
 *    summary: get the venueType by id
 *    tags: [venueType]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: venueType ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: venueType details
 *      404:
 *        description: venueType not Found
 *      500:
 *        description: Server error
 */

router.get("/venueType/:id", venueTypeController.getvenueTypeById);


/**
 * @swagger
 *  /api/venueType/{id}:
 *   put:
 *     tags: [venueType]
 *     summary: Update venueType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: venueType ID
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
 *         description: venueType updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: venueType not fount
 *       '500':
 *         description: Server error
 */

router.put("/venueType/:id", venueTypeController.updatevenueType);


/**
 * @swagger
 * /api/venueType/{id}:
 *   delete:
 *     tags: [venueType]
 *     summary: Delete a venueType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: venueType ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: venueType  deleted 
 *       '404':
 *         description: venueType  not found
 *       '500':
 *         description: Server error
 */

router.delete("/venueType/:id", venueTypeController.deletevenueType); 

module.exports = router; 
