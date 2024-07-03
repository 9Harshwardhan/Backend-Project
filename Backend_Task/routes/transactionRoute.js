
import express from "express";
import { transactions } from "../Controllers/transactionController.js";

const router = express.Router();

router.get("/transactions", transactions);

export default router;
