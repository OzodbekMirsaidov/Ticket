const express = require("express");
const router = express.Router();
const humanCategoryController = require("../controller/humanCategory.controller")



/**
 * @swagger
 * tags:
 *   name: humanCategory
 *   description: humanCategory managament
 */

/**
 * @swagger
 * /api/humanCategory:
 *   post:
 *     tags: [humanCategory]
 *     summary: create a new humanCategory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: humanCategory created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/humanCategory",  humanCategoryController.createhumanCategory);

/**
 * @swagger
 * /api/humanCategory:
 *   get:
 *     tags: [humanCategory]
 *     summary: get all humanCategory
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:   
 *       '200':
 *         description: List of humanCategory
 *       '500':
 *         description: server error
 */
router.get("/humanCategory", humanCategoryController.gethumanCategorys);

/**
 * @swagger
 * /api/humanCategory/{id}:
 *   get:
 *    summary: get the humanCategory by id
 *    tags: [humanCategory]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: humanCategory ID
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        description: humanCategory details
 *      404:
 *        description: humanCategory not Found
 *      500:
 *        description: Server error
 */

router.get("/humanCategory/:id", humanCategoryController.gethumanCategoryById);


/**
 * @swagger
 *  /api/humanCategory/{id}:
 *   put:
 *     tags: [humanCategory]
 *     summary: Update humanCategory by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: humanCategory ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender:
 *                 type: number
 *     responses:
 *       '200':
 *         description: humanCategory updated
 *       '400':
 *         description: invalid input
 *       '404':
 *         description: humanCategory not fount
 *       '500':
 *         description: Server error
 */

router.put("/humanCategory/:id", humanCategoryController.updatehumanCategory);


/**
 * @swagger
 * /api/humanCategory/{id}:
 *   delete:
 *     tags: [humanCategory]
 *     summary: Delete a humanCategory by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: humanCategory ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: humanCategory  deleted 
 *       '404':
 *         description: humanCategory  not found
 *       '500':
 *         description: Server error
 */

router.delete("/humanCategory/:id", humanCategoryController.deletehumanCategory); 

module.exports = router; 
