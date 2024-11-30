const express = require("express");
const router = express.Router();
const bookingController = require("../controller/booking.controller");

/** 
 * @swagger
 * tags:
 *   name: Booking
 *   description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/** 
 * @swagger
 * /api/booking:
 *   post:
 *     tags: [Booking]
 *     summary: Create a new booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               fineshed:
 *                 type: string
 *                 format: date
 *               payment_id:
 *                 type: number
 *               delivery_id:
 *                 type: number
 *               discount_id:
 *                 type: number
 *               status_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Booking created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */

router.post("/booking", bookingController.createBooking);

/** 
 * @swagger
 * /api/booking:
 *   get:
 *     tags: [Booking]
 *     summary: Get all booking
 *     responses:
 *       '200':
 *         description: List of booking
 *       '500':
 *         description: Server error
 */

router.get("/booking", bookingController.getBooking);

/** 
 * @swagger
 * /api/booking/{id}:
 *   get:
 *     tags: [Booking]
 *     summary: Get booking by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Booking ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Booking details
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Server Error
 */

router.get("/booking/:id", bookingController.getBookingById);

/**
 * @swagger
 * /api/booking/{id}:
 *   put:
 *     summary: update booking
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Booking ID
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
 *               cart_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               fineshed:
 *                 type: string
 *                 format: date
 *               payment_id:
 *                 type: number
 *               delivery_id:
 *                 type: number
 *               discount_id:
 *                 type: number
 *               status_id:
 *                 type: number
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

router.put("/booking/:id", bookingController.updateBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   delete:
 *     summery: Delete a booking
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: booking Id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: deleted successfully
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Server error
 */

router.delete("/booking/:id", bookingController.deleteBooking);

module.exports = router;