import { IPatientFoodLog } from "../interfaces";

export class PatientFoodLogFactory {
  static create(requestBody: IPatientFoodLog): IPatientFoodLog {
    const patientFoodLog: IPatientFoodLog = {
      patientId: requestBody.patientId,
      foodItemId: requestBody.foodItemId,
      gramsQuantity: requestBody.gramsQuantity,
      date: requestBody.date,
    };

    return patientFoodLog;
  }
}
