const express = require("express");
const router = express.Router();
const districtController = require("../controller/district.controller")



/**
 * @swagger
 * tags:
 *   name: District
 *   description: District managament
 */

/**
 * @swagger
 * /api/District:
 *   post:
 *     tags: [District]
 *     summary: create a new District
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: District created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/District",  districtController.createDistrict);

/**
 * @swagger
 * /api/District:
 *   get:
 *     tags: [District]
 *     summary: get all District
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: List of District
 *       '500':
 *         description: server error
 */
router.get("/District", districtController.getDistricts);

/**
 * @swagger
 * /api/District/{id}:
 *   get:
 *    summary: get the District by id
 *    tags: [District]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: District ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: District details
 *      404:
 *        description: District not Found
 *      500:
 *        description: Server error
 */

router.get("/District/:id", districtController.getDistrictById);


/**
 * @swagger
 *  /api/District/{id}:
 *   put:
 *     tags: [District]
 *     summary: Update District by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: District updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: District not fount
 *       '500':
 *         description: Server error
 */

router.put("/District/:id", districtController.updateDistrict);


/**
 * @swagger
 * /api/District/{id}:
 *   delete:
 *     tags: [District]
 *     summary: Delete a District by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: District ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: District  deleted 
 *       '404':
 *         description: District  not found
 *       '500':
 *         description: Server error
 */

router.delete("/District/:id", districtController.deleteDistrict); 

module.exports = router;