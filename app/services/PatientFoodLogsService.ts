import { PatientFoodLog } from "../models/PatientFoodLog";
import { FoodItem } from "../models/FoodItem";
import { AppDataSource } from "../database";
import { Patient } from "../models/Patient";
import { Repository } from "typeorm";

export class PatientFoodLogsService {
  private _repository: Repository<PatientFoodLog>;

  constructor() {
    // should be done with dependency injection
    this._repository = AppDataSource.getRepository(PatientFoodLog);
  }

  async createPatientFoodLog(patient: Patient, foodItem: FoodItem, gramsQuantity: number, dateAdded: Date): Promise<PatientFoodLog> {
    const currentDate = new Date();

    const newPatientFoodLog = this._repository.create({
      patient,
      foodItem,
      gramsQuantity,
      // limit the user to input future dates
      date: dateAdded <= currentDate ? dateAdded : currentDate,
    });
    return this._repository.save(newPatientFoodLog);
  }

  async deletePatientFoodLog(id: number): Promise<void> {
    await this._repository.delete(id);
  }
}
