import express from "express";
import { createUserResidency } from "../controllers/residencyController.js";

const router = express.Router();

router.post("/create", createUserResidency);

export { router as residencyRoute };
