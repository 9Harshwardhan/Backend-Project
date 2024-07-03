
import express from "express";
import { initializeDb } from "../Controllers/initializeDatabase.js";

const router = express.Router();

router.get("/initialize-database", initializeDb);


export default router;
