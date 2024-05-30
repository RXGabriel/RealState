import express from "express";
import {
  createUserResidency,
  getAllResidencies,
} from "../controllers/residencyController.js";

const router = express.Router();

router.post("/create", createUserResidency);
router.get("/allresid", getAllResidencies);

export { router as residencyRoute };
