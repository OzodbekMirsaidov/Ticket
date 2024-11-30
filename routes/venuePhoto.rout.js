const express = require("express");
const router = express.Router();
const venuePhotoController = require("../controller/venuePhoto.conroller")



/**
 * @swagger
 * tags:
 *   name: venuePhoto
 *   description: venuePhoto managament
 */

/**
 * @swagger
 * /api/venuePhoto:
 *   post:
 *     tags: [venuePhoto]
 *     summary: create a new venuePhoto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: number
 *               url:
 *                 type: string
 *     responses:
 *       '201':
 *         description: venuePhoto created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/venuePhoto",  venuePhotoController.createVenuePhoto);

/**
 * @swagger
 * /api/venuePhoto:
 *   get:
 *     tags: [venuePhoto]
 *     summary: get all venuePhoto
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: List of venuePhoto
 *       '500':
 *         description: server error
 */
router.get("/venuePhoto", venuePhotoController.getVenuePhotos);

/**
 * @swagger
 * /api/venuePhoto/{id}:
 *   get:
 *    summary: get the venuePhoto by id
 *    tags: [venuePhoto]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: venuePhoto ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: venuePhoto details
 *      404:
 *        description: venuePhoto not Found
 *      500:
 *        description: Server error
 */

router.get("/venuePhoto/:id", venuePhotoController.getVenuePhotoById);


/**
 * @swagger
 *  /api/venuePhoto/{id}:
 *   put:
 *     tags: [venuePhoto]
 *     summary: Update venuePhoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: venuePhoto ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: number
 *               url:
 *                 type: string
 *     responses:
 *       '200':
 *         description: venuePhoto updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: venuePhoto not fount
 *       '500':
 *         description: Server error
 */

router.put("/venuePhoto/:id", venuePhotoController.updateVenuePhoto);


/**
 * @swagger
 * /api/venuePhoto/{id}:
 *   delete:
 *     tags: [venuePhoto]
 *     summary: Delete a venuePhoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: venuePhoto ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: venuePhoto  deleted 
 *       '404':
 *         description: venuePhoto  not found
 *       '500':
 *         description: Server error
 */

router.delete("/venuePhoto/:id", venuePhotoController.deleteVenuePhoto); 

module.exports = router;