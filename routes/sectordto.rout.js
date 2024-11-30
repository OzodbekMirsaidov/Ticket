const express = require("express");
const router = express.Router();
const sectorDtoController = require("../controller/sectordto.controller");

/**
 * @swagger
 * tags:
 *   name: SectorDto
 *   description: SectorDto management
 */

/**
 * @swagger
 * /api/sectorDtos:
 *   post:
 *     summary: Create a new sectorDto
 *     tags: [SectorDto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: SectorDto created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/sectorDtos", sectorDtoController.createSectorDto);

/**
 * @swagger
 * /api/sectorDtos:
 *   get:
 *     tags: [SectorDto]
 *     summary: Get all sectorDtos
 *     responses:
 *       200:
 *         description: List of sectorDtos
 *       500:
 *         description: Server error
 */
router.get("/sectorDtos", sectorDtoController.getSectorDtos);

/**
 * @swagger
 * /api/sectorDtos/{id}:
 *   get:
 *     tags: [SectorDto]
 *     summary: Get sectorDto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: SectorDto ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: SectorDto details
 *       404:
 *         description: SectorDto not found
 *       500:
 *         description: Server error
 */
router.get("/sectorDtos/:id", sectorDtoController.getSectorDtoById);

/**
 * @swagger
 * /api/sectorDtos/{id}:
 *   put:
 *     summary: Update a sectorDto
 *     tags: [SectorDto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: SectorDto ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: SectorDto updated
 *       404:
 *         description: SectorDto not found
 *       500:
 *         description: Server error
 */
router.put("/sectorDtos/:id", sectorDtoController.updateSectorDto);

/**
 * @swagger
 * /api/sectorDtos/{id}:
 *   delete:
 *     tags: [SectorDto]
 *     summary: Delete a sectorDto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: SectorDto ID
 *     responses:
 *       204:
 *         description: SectorDto deleted
 *       404:
 *         description: SectorDto not found
 *       500:
 *         description: Server error
 */
router.delete("/sectorDtos/:id", sectorDtoController.deleteSectorDto);

module.exports = router;
