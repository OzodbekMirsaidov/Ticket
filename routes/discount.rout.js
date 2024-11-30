const express = require("express");
const router = express.Router();
const discountController = require("../controller/discount.controller");

/**
 * @swagger
 * tags:
 *   name: Discount
 *   description: Discount management
 */

/**
 * @swagger
 * /api/discounts:
 *   post:
 *     summary: Create a new discount
 *     tags: [Discount]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *     responses:
 *       201:
 *         description: Discount created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/discounts", discountController.createDiscount);

/**
 * @swagger
 * /api/discounts:
 *   get:
 *     tags: [Discount]
 *     summary: Get all discounts
 *     responses:
 *       200:
 *         description: List of discounts
 *       500:
 *         description: Server error
 */
router.get("/discounts", discountController.getDiscounts);

/**
 * @swagger
 * /api/discounts/{id}:
 *   get:
 *     tags: [Discount]
 *     summary: Get discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Discount ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Discount details
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.get("/discounts/:id", discountController.getDiscountById);

/**
 * @swagger
 * /api/discounts/{id}:
 *   put:
 *     summary: Update a discount
 *     tags: [Discount]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Discount ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Discount updated
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.put("/discounts/:id", discountController.updateDiscount);

/**
 * @swagger
 * /api/discounts/{id}:
 *   delete:
 *     tags: [Discount]
 *     summary: Delete a discount
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Discount ID
 *     responses:
 *       204:
 *         description: Discount deleted
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.delete("/discounts/:id", discountController.deleteDiscount);

module.exports = router;
