import { Request, Response } from "express";
import { PatientsService } from "../services/PatientsService";
import { PatientFactory } from "../factories/PatientFactory";

export class PatientsController {
  static async getAllPatients(req: Request, res: Response) {
    const patientsService = new PatientsService();

    try {
      const patientsList = await patientsService.getAllPatients();

      if (!patientsList.length) {
        return res.status(200).json({ message: "No patients found", data: [] });
      }

      return res.status(200).json({ message: "", data: patientsList });
    } catch (error: unknown) {
      return res.status(404).json({ message: "An error occured", data: [] });
    }
  }

  static async getPatientById(req: Request, res: Response) {
    const patientsService = new PatientsService();

    try {
      const patientData = await patientsService.getPatientById(Number(req.params.id));
      return res.status(200).json({ message: "", data: patientData });
    } catch (error: unknown) {
      return res.status(404).json({ message: "An error occured", data: [] });
    }
  }

  static async createPatient(req: Request, res: Response) {
    const patientsService = new PatientsService();

    try {
      const patientRequest = PatientFactory.create(req.body);
      const patientResponse = await patientsService.createPatient(patientRequest);
      return res.status(200).json({ message: "", data: patientResponse });
    } catch (error: unknown) {
      return res.status(404).json({ message: "An error occured", data: [] });
    }
  }
}
