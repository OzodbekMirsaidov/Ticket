const express = require("express");
const router = express.Router();
const customerAddressController = require("../controller/customerAddress.controller");

/** 
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/** 
 * @swagger
 * /api/customerAddress:
 *   post:
 *     tags: [CustomerAddress]
 *     summary: Create a new customerAddress
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
 *               country_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat_id:
 *                 type: number
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       '201':
 *         description: CustomerAddress created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/customerAddress", customerAddressController.createCustomerAddress);

/** 
 * @swagger
 * /api/customerAddress:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get all customerAddress
 *     responses:
 *       '200':
 *         description: List of customerAddress
 *       '500':
 *         description: Server error
 */

router.get("/customerAddress", customerAddressController.getCustomerAddress);

/** 
 * @swagger
 * /api/customerAddress/{id}:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get customerAddress by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: CustomerAddress ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: CustomerAddress details
 *       '404':
 *         description: CustomerAddress not found
 *       '500':
 *         description: Server Error
 */

router.get("/customerAddress/:id", customerAddressController.getCustomerAddressById);


/** 
 * @swagger
 * /api/customerAddress/{id}:
 *   put:
 *     summary: update customerAddress
 *     tags: [CustomerAddress]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: CustomerAddress ID
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
 *               country_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat_id:
 *                 type: number
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
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

router.put("/customerAddress/:id", customerAddressController.updateCustomerAddress);

/** 
 * @swagger
 * /api/customerAddress/{id}:
 *   delete:
 *     summery: Delete a customerAddress
 *     tags: [CustomerAddress]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: customerAddress Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: CustomerAddress not found
 *       '500':
 *         description: Server error
 */

router.delete("/customerAddress/:id", customerAddressController.deleteCustomerAddress);

module.exports = router;