import { DataSource, Repository } from "typeorm";
import { PatientFoodLog } from "../models/PatientFoodLog";
import { Patient } from "../models/Patient";
import { FoodItem } from "../models/FoodItem";

export class PatientFoodLogsService {
  private _repository: Repository<PatientFoodLog>;

  constructor(appDataSource: DataSource) {
    // should be done with dependency injection
    this._repository = appDataSource.getRepository(PatientFoodLog);
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
