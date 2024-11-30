const express = require("express");
const router = express.Router();
const regionController = require("../controller/region.controller")



/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Region managament
 */

/**
 * @swagger
 * /api/Region:
 *   post:
 *     tags: [Region]
 *     summary: create a new Region
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               postpone:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Region created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/Region",  regionController.createregion);

/**
 * @swagger
 * /api/Region:
 *   get:
 *     tags: [Region]
 *     summary: get all Region
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:   
 *       '200':
 *         description: List of Region
 *       '500':
 *         description: server error
 */
router.get("/Region", regionController.getregions);

/**
 * @swagger
 * /api/Region/{id}:
 *   get:
 *    summary: get the Region by id
 *    tags: [Region]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Region ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: Region details
 *      404:
 *        description: Region not Found
 *      500:
 *        description: Server error
 */

router.get("/Region/:id", regionController.getregionById);


/**
 * @swagger
 *  /api/Region/{id}:
 *   put:
 *     tags: [Region]
 *     summary: Update Region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               postpone:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Region updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: Region not fount
 *       '500':
 *         description: Server error
 */

router.put("/Region/:id", regionController.updateregion);


/**
 * @swagger
 * /api/Region/{id}:
 *   delete:
 *     tags: [Region]
 *     summary: Delete a Region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Region ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Region  deleted 
 *       '404':
 *         description: Region  not found
 *       '500':
 *         description: Server error
 */

router.delete("/Region/:id", regionController.deleteregion); 

module.exports = router; 
