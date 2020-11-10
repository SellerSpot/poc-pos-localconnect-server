import express, { Router } from "express";
import timeController from "../controllers/timeController";

const router: express.Router = Router();

// declaring routes
router.get("/time", timeController);

export default router;
