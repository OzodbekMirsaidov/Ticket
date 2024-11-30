const express = require("express");
const router = express.Router();
const customerCardController = require("../controller/customerCard.controller");

/** 
 * @swagger
 * tags:
 *   name: CustomerCard
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/** 
 * @swagger
 * /api/customerCard:
 *   post:
 *     tags: [CustomerCard]
 *     summary: Create a new customerCard
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: CustomerCard created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/customerCard", customerCardController.createCustomerCard);

/** 
 * @swagger
 * /api/customerCard:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get all customerCard
 *     responses:
 *       '200':
 *         description: List of customerCard
 *       '500':
 *         description: Server error
 */

router.get("/customerCard", customerCardController.getCustomerCard);

/** 
 * @swagger
 * /api/customerCard/{id}:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get customerCard by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: CustomerCard ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: CustomerCard details
 *       '404':
 *         description: CustomerCard not found
 *       '500':
 *         description: Server Error
 */

router.get("/customerCard/:id", customerCardController.getCustomerCardById);

/** 
 * @swagger
 * /api/customerCard/{id}:
 *   put:
 *     summary: update customerCard
 *     tags: [CustomerCard]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: CustomerCard ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: number
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Foydalanuvchi muvaffaqiyatli yangilandi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '404':
 *         description: Foydalanuvchi topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

router.put("/customerCard/:id", customerCardController.updateCustomerCard);

/** 
 * @swagger
 * /api/customerCard/{id}:
 *   delete:
 *     summery: Delete a customerCard
 *     tags: [CustomerCard]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: customerCard Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: CustomerCard not found
 *       '500':
 *         description: Server error
 */

router.delete("/customerCard/:id", customerCardController.deleteCustomerCard);

module.exports = router;