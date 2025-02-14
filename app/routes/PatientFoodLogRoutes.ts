import express from "express";
import { PatientFoodLogController } from "../controllers/PatientFoodLogController";

const router = express.Router();

router.post("/", PatientFoodLogController.createPatientFoodLog);
router.delete("/:id", PatientFoodLogController.deletePatientFoodLog);

export { router as patientFoodLogRoutes };
