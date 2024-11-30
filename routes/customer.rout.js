const express = require("express");
const router = express.Router();
const customerController = require("../controller/customer.controller");

/** 
 * @swagger
 * tags:
 *   name: Customer
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/customer:
 *   post:
 *     tags: [Customer]
 *     summary: Create a new customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Customer created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/customer", customerController.createCustomer);

/**
 * @swagger
 * /api/customer:
 *   get:
 *     tags: [Customer]
 *     summary: Get all customer
 *     responses:
 *       '200':
 *         description: List of customer
 *       '500':
 *         description: Server error
 */

router.get("/customer", customerController.getCustomer);

/** 
 * @swagger
 * /api/customer/{id}:
 *   get:
 *     tags: [Customer]
 *     summary: Get customer by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Customer details
 *       '404':
 *         description: Customer not found
 *       '500':
 *         description: Server Error
 */

router.get("/customer/:id", customerController.getCustomerById);

/** 
 * @swagger
 * /api/customer/{id}:
 *   put:
 *     summary: update customer
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Customer ID
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
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               hashed_refresh_token:
 *                 type: string
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

router.put("/customer/:id", customerController.updateCustomer);

/** 
 * @swagger
 * /api/customer/{id}:
 *   delete:
 *     summery: Delete a customer
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: customer Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Customer not found
 *       '500':
 *         description: Server error
 */

router.delete("/customer/:id", customerController.deleteCustomer);

module.exports = router;