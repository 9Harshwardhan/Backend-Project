
import express from "express";
import { statistics } from "../Controllers/statisticsController.js";

const router = express.Router();

router.get("/statistics", statistics);

export default router;
