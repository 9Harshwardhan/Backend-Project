
import express from "express";
import { pieChart } from "../Controllers/piechartController.js";

const router = express.Router();

router.get("/piechart", pieChart);

export default router;
