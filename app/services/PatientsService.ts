import { DataSource, Repository } from "typeorm";
import { Patient } from "../models/Patient";

export class PatientsService {
  private _repository: Repository<Patient>;

  constructor(appDataSource: DataSource) {
    // should be done with dependency injection
    this._repository = appDataSource.getRepository(Patient);
  }

  async getAllPatients(): Promise<Patient[]> {
    return this._repository.find();
  }

  async getPatientById(id: number): Promise<Patient> {
    const patient = await this._repository.findOne({ where: { id } });
    if (!patient) {
      throw new Error(`Patient with id ${id} not found`);
    }
    return patient;
  }

  async createPatient(patient: Patient): Promise<Patient> {
    const newPatient = this._repository.create(patient);
    return this._repository.save(newPatient);
  }

  async updatePatient(id: number, patient: Partial<Patient>): Promise<Patient> {
    await this._repository.update(id, patient);
    return await this.getPatientById(id);
  }
}
