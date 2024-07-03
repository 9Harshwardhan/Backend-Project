
import express from "express";
import { barChart } from "../Controllers/barchartController.js";

const router = express.Router();

router.get("/barchart", barChart);

export default router;
