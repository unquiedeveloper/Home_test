import express from "express"
import { publishVersion, recentPublishVersion } from "../controllers/documentVersionSchema.js";

const route = express.Router();


route.get('/published-versions',publishVersion)
route.get("/published-versions/:documentId",recentPublishVersion);
export default route;