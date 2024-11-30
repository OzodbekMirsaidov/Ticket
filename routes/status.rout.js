const express = require("express");
const router = express.Router();
const statusController = require("../controller/status.controller");

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: Status management
 */

/**
 * @swagger
 * /api/statuses:
 *   post:
 *     summary: Create a new status
 *     tags: [Status]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Status created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/statuses", statusController.createStatus);

/**
 * @swagger
 * /api/statuses:
 *   get:
 *     tags: [Status]
 *     summary: Get all statuses
 *     responses:
 *       200:
 *         description: List of statuses
 *       500:
 *         description: Server error
 */
router.get("/statuses", statusController.getStatuses);

/**
 * @swagger
 * /api/statuses/{id}:
 *   get:
 *     tags: [Status]
 *     summary: Get status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Status ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Status details
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
router.get("/statuses/:id", statusController.getStatusById);

/**
 * @swagger
 * /api/statuses/{id}:
 *   put:
 *     summary: Update a status
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Status ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Status updated
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
router.put("/statuses/:id", statusController.updateStatus);

/**
 * @swagger
 * /api/statuses/{id}:
 *   delete:
 *     tags: [Status]
 *     summary: Delete a status
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Status ID
 *     responses:
 *       204:
 *         description: Status deleted
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
router.delete("/statuses/:id", statusController.deleteStatus);

module.exports = router;
