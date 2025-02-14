import { PatientFoodLog } from "../models/PatientFoodLog";
import { FoodItem } from "../models/FoodItem";
import { AppDataSource } from "../database";
import { Patient } from "../models/Patient";
import { Repository } from "typeorm";
import { IPatientFoodLog } from "../interfaces";

export class PatientFoodLogsService {
  private _repository: Repository<PatientFoodLog>;
  private _foodItemRepository: Repository<FoodItem>;
  private _patientRepository: Repository<Patient>;

  constructor() {
    // should be done with dependency injection
    this._repository = AppDataSource.getRepository(PatientFoodLog);
    this._foodItemRepository = AppDataSource.getRepository(FoodItem);
    this._patientRepository = AppDataSource.getRepository(Patient);
  }

  async createPatientFoodLog(patientFoodLog: IPatientFoodLog): Promise<PatientFoodLog> {
    const currentDate = new Date();

    const newPatientFoodLog = this._repository.create({
      patient: { id: patientFoodLog.patientId },
      foodItem: { id: patientFoodLog.foodItemId },
      gramsQuantity: patientFoodLog.gramsQuantity,
      // limit the user to input future dates
      date: patientFoodLog.date <= currentDate ? patientFoodLog.date : currentDate,
    });

    return this._repository.save(newPatientFoodLog);
  }

  async deletePatientFoodLog(id: number): Promise<void> {
    await this._repository.delete(id);
  }
}
