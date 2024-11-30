const express = require("express");
const router = express.Router();
const flatController = require("../controller/flatdto.controller");

/**
 * @swagger
 * tags:
 *  name: flatDto
 *  description: flat management
 */

/**
 * @swagger
 * /api/flatDto:
 *  post:
 *    summary: Create a new flat
 *    tags: [flatDto]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              etaj:
 *                type: integer
 *              condition:
 *                type: string
 *    responses:
 *      201:
 *        description: flat created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/flatDto", flatController.createFlatDto);

/**
 * @swagger
 * /api/flatDto:
 *  get:
 *    summary: Get all flatDto
 *    tags: [flatDto]
 *    responses:
 *      200:
 *        description: List of flatDto
 *      500:
 *        description: Server error
 */
router.get("/flatDto", flatController.getFlatDtos);


/**
 * @swagger
 * /api/flatDto/{id}:
 *  get:
 *    summary: Get flat by ID
 *    tags: [flatDto]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: flat ID
 *    responses:
 *      200:
 *        description: flat details
 *      404:
 *        description: flat not found
 *      500:
 *        description: Server error
 */
router.get("/flatDto/:id", flatController.getFlatDtoById);

/**
 * @swagger
 * /api/flatDto/{id}:
 *  put:
 *    summary: Update flat by ID
 *    tags: [flatDto]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: flat ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              etaj:
 *                type: integer
 *              condition:
 *                type: string
 *    responses:
 *      200:
 *        description: flat updated
 *      400:
 *        description: Invalid input
 *      404:
 *        description: flat not found
 *      500:
 *        description: Server error
 */
router.put("/flatDto/:id", flatController.updateFlatDto);

/**
 * @swagger
 * /api/flatDto/{id}:
 *  delete:
 *    summary: Delete flat by ID
 *    tags: [flatDto]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: flat ID
 *    responses:
 *      204:
 *        description: flat deleted
 *      404:
 *        description: flat not found
 *      500:
 *        description: Server error
 */
router.delete("/flatDto/:id", flatController.deleteFlatDto);

module.exports = router;
