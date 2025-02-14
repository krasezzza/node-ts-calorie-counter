import { Patient } from "../models/Patient";
import { AppDataSource } from "../database";
import { Repository } from "typeorm";
import { IPatient } from "../interfaces";

export class PatientsService {
  private _repository: Repository<Patient>;

  constructor() {
    // should be done with dependency injection
    this._repository = AppDataSource.getRepository(Patient);
  }

  async getAllPatients(): Promise<Patient[]> {
    return this._repository.find({
      relations: ["foodLogs"],
    });
  }

  async getPatientById(id: number): Promise<Patient> {
    const patient = await this._repository.findOne({ where: { id } });
    if (!patient) {
      throw new Error(`Patient with id ${id} not found`);
    }
    return patient;
  }

  async createPatient(patient: IPatient): Promise<Patient> {
    const patientData = { ...patient, foodLogs: [] };
    const newPatient = this._repository.create(patientData);
    return this._repository.save(newPatient);
  }
}
