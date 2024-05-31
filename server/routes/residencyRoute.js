import express from "express";
import {
  createUserResidency,
  getAllResidencies,
  getResidency,
} from "../controllers/residencyController.js";

const router = express.Router();

router.post("/create", createUserResidency);
router.get("/allresid", getAllResidencies);
router.get("/:id", getResidency);

export { router as residencyRoute };
