const express = require("express");
const router = express.Router();
const deliveryController = require("../controller/delivery.controller");

/**
 * @swagger
 * tags:
 *   name: Delivery
 *   description: Delivery management
 */

/**
 * @swagger
 * /api/delivery:
 *   post:
 *     summary: Create a new delivery method
 *     tags: [Delivery]
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
 *         description: Delivery method created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/delivery", deliveryController.createDelivery);

/**
 * @swagger
 * /api/delivery:
 *   get:
 *     tags: [Delivery]
 *     summary: Get all delivery methods
 *     responses:
 *       200:
 *         description: List of delivery methods
 *       500:
 *         description: Server error
 */
router.get("/delivery", deliveryController.getDeliverys);

/**
 * @swagger
 * /api/delivery/{id}:
 *   get:
 *     tags: [Delivery]
 *     summary: Get delivery method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Delivery method ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Delivery method details
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Server error
 */
router.get("/delivery/:id", deliveryController.getDeliveryById);

/**
 * @swagger
 * /api/delivery/{id}:
 *   put:
 *     summary: Update a delivery method
 *     tags: [Delivery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Delivery method ID
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
 *         description: Delivery method updated
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Server error
 */
router.put("/delivery/:id", deliveryController.updateDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *   delete:
 *     tags: [Delivery]
 *     summary: Delete a delivery method
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Delivery method ID
 *     responses:
 *       204:
 *         description: Delivery method deleted
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Server error
 */
router.delete("/delivery/:id", deliveryController.deleteDelivery);

module.exports = router;
