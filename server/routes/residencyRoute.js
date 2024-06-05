import express from "express";
import {
  createUserResidency,
  getAllResidencies,
  getResidency,
} from "../controllers/residencyController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/create", jwtCheck, createUserResidency);
router.get("/allresid", getAllResidencies);
router.get("/:id", getResidency);

export { router as residencyRoute };
