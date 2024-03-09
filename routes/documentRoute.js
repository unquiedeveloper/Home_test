import express from "express"
import { Draft, create, createVersion, publish, update } from "../controllers/documentSchema.js";

const router = express.Router();



router.post("/documents",create)
router.post("/documents/:documentId/versions",createVersion);
router.post('/documents/:documentId/versions/:versionId',update);
router.post('/documents/:documentId/publish',publish)
router.post('/documents/:documentId/versions',Draft);
export default router;

