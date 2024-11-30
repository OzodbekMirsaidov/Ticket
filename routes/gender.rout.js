const express = require("express");
const router = express.Router();
const genderController = require("../controller/gender.controller");

/**
 * @swagger
 * tags:
 *   name: Gender
 *   description: Gender management
 */

/**
 * @swagger
 * /api/genders:
 *   post:
 *     summary: Create a new gender
 *     tags: [Gender]
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
 *       201:
 *         description: Gender created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/genders", genderController.createGender);

/**
 * @swagger
 * /api/genders:
 *   get:
 *     tags: [Gender]
 *     summary: Get all genders
 *     responses:
 *       200:
 *         description: List of genders
 *       500:
 *         description: Server error
 */
router.get("/genders", genderController.getGenders);

/**
 * @swagger
 * /api/genders/{id}:
 *   get:
 *     tags: [Gender]
 *     summary: Get gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Gender ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gender details
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
router.get("/genders/:id", genderController.getGenderById);

/**
 * @swagger
 * /api/genders/{id}:
 *   put:
 *     summary: Update a gender
 *     tags: [Gender]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Gender ID
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
 *       200:
 *         description: Gender updated
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
router.put("/genders/:id", genderController.updateGender);

/**
 * @swagger
 * /api/genders/{id}:
 *   delete:
 *     tags: [Gender]
 *     summary: Delete a gender
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Gender ID
 *     responses:
 *       204:
 *         description: Gender deleted
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
router.delete("/genders/:id", genderController.deleteGender);

module.exports = router;
