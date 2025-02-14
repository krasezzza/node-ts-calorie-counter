import express from "express";
import { PatientsController } from "../controllers/PatientsController";

const router = express.Router();

router.get("/", PatientsController.getAllPatients);
router.get("/:id", PatientsController.getPatientById);
router.post("/", PatientsController.createPatient);

export { router as patientRoutes };
