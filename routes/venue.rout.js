const express = require("express");
const router = express.Router();
const venueController = require("../controller/venue.controller")



/**
 * @swagger
 * tags:
 *   name: venue
 *   description: Venue managament
 */

/**
 * @swagger
 * /api/venue:
 *   post:
 *     tags: [venue]
 *     summary: create a new Venue
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               venue_type_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Venue created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/venue", venueController.createVenue);

/**
 * @swagger
 * /api/venue:
 *   get:
 *     tags: [venue]
 *     summary: get all venue
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: List of venue
 *       '500':
 *         description: server error
 */
router.get("/venue", venueController.getVenues);

/**
 * @swagger
 * /api/venue/{id}:
 *   get:
 *    summary: get the Venue by id
 *    tags: [venue]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Venue ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: Venue details
 *      404:
 *        description: Venue not Found
 *      500:
 *        description: Server error
 */

router.get("/venue/:id", venueController.getVenueById);


/**
 * @swagger
 *  /api/venue/{id}:
 *   put:
 *     tags: [venue]
 *     summary: Update Venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               venue_type_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Venue updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Venue not fount
 *       '500':
 *         description: Server error
 */

router.put("/venue/:id", venueController.updateVenue);


/**
 * @swagger
 * /api/venue/{id}:
 *   delete:
 *     tags: [venue]
 *     summary: Delete a Venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Venue ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Venue  deleted 
 *       '404':
 *         description: Venue  not found
 *       '500':
 *         description: Server error
 */

router.delete("/venue/:id", venueController.deleteVenue);

module.exports = router;