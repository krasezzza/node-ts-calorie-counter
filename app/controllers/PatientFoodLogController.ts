import { Request, Response } from "express";
import { PatientFoodLogsService } from "../services/PatientFoodLogsService";
import { PatientFoodLogFactory } from "../factories/PatientFoodLogFactory";

export class PatientFoodLogController {
  static async createPatientFoodLog(req: Request, res: Response) {
    const service = new PatientFoodLogsService();

    try {
      const patientFoodLogRequest = PatientFoodLogFactory.create(req.body);
      const patientFoodLogResponse = await service.createPatientFoodLog(patientFoodLogRequest);
      return res.status(200).json({ message: "", data: patientFoodLogResponse });
    } catch (error: unknown) {
      return res.status(404).json({ message: "An error occured", data: [] });
    }
  }

  static async deletePatientFoodLog(req: Request, res: Response) {
    const service = new PatientFoodLogsService();

    try {
      const patientFoodLogData = await service.deletePatientFoodLog(Number(req.params.id));
      return res.status(200).json({ message: "", data: patientFoodLogData });
    } catch (error: unknown) {
      return res.status(404).json({ message: "An error occured", data: [] });
    }
  }
}
